package com.zahara.lms.faculty.service;

import com.zahara.lms.faculty.client.SubjectFeignClient;
import com.zahara.lms.faculty.client.UserFeignClient;
import com.zahara.lms.faculty.dto.StudentDTO;
import com.zahara.lms.faculty.mapper.StudentMapper;
import com.zahara.lms.faculty.model.Student;
import com.zahara.lms.faculty.repository.StudentRepository;
import com.zahara.lms.shared.dto.RoleDTO;
import com.zahara.lms.shared.dto.UserDTO;
import com.zahara.lms.shared.dto.UserDetailsDTO;
import com.zahara.lms.shared.exception.ForbiddenException;
import com.zahara.lms.shared.exception.NotFoundException;
import com.zahara.lms.shared.service.ExtendedService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static com.zahara.lms.shared.security.SecurityUtils.*;

@Service
public class StudentService extends ExtendedService<Student, StudentDTO, Long> {
    private final StudentRepository repository;
    private final StudentMapper mapper;
    private final ThesisService thesisService;
    private final UserFeignClient userFeignClient;
    private final SubjectFeignClient subjectFeignClient;

    public StudentService(
            StudentRepository repository,
            StudentMapper mapper,
            ThesisService thesisService,
            UserFeignClient userFeignClient,
            SubjectFeignClient subjectFeignClient) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
        this.thesisService = thesisService;
        this.userFeignClient = userFeignClient;
        this.subjectFeignClient = subjectFeignClient;
    }

    @Override
    public List<StudentDTO> findById(Set<Long> id) {
        if (hasAuthority(ROLE_STUDENT) && (id.size() > 1 || !id.contains(getStudentId()))) {
            throw new ForbiddenException("You are not allowed to view these students as if");
        }

        return super.findById(id);
    }

    @Override
    @Transactional
    public StudentDTO save(StudentDTO student) {
        UserDTO userRequest = student.getUser();
        UserDTO userResponse =
                userRequest.getId() == null
                        ? userFeignClient.createUser(
                                UserDetailsDTO.builder()
                                        .username(userRequest.getUsername())
                                        .password(userRequest.getPassword())
                                        .authorities(
                                                Set.of(
                                                        RoleDTO.builder()
                                                                .id(ROLE_STUDENT_ID)
                                                                .authority(ROLE_STUDENT)
                                                                .build()))
                                        .build())
                        : userFeignClient.patchUser(userRequest.getId(), userRequest);
        student.setUser(userResponse);
        return super.save(student);
    }

    @Override
    @Transactional
    public void delete(Set<Long> id) {
        List<Student> students = (List<Student>) repository.findAllById(id);
        Set<Long> userIds = students.stream().map(Student::getUserId).collect(Collectors.toSet());
        userFeignClient.deleteUser(userIds);
        repository.softDeleteByIds(id);
    }

    @Override
    protected List<StudentDTO> mapMissingValues(List<StudentDTO> students) {
        map(students, StudentDTO::getUser, StudentDTO::setUser, userFeignClient::getUser);
        return students;
    }

    public StudentDTO findByUserId(Long userId) {
        Student student =
                repository
                        .findByUserId(userId)
                        .orElseThrow(() -> new NotFoundException("User id not found"));
        return mapper.toDTO(student);
    }

    public Long findIdByUserId(Long userId) {
        return repository
                .findByUserId(userId)
                .orElseThrow(() -> new NotFoundException("User id not found"))
                .getId();
    }

    public List<StudentDTO> findBySubjectId(Long id) {
        Set<Long> studentIds = new HashSet<>(subjectFeignClient.getStudentIdsBySubjectId(id));
        List<StudentDTO> students = mapper.toDTO(repository.findByIdInAndDeletedFalse(studentIds));
        return students.isEmpty() ? students : mapMissingValues(students);
    }

    public Page<StudentDTO> findBySubjectId(Long id, Pageable pageable, String search) {
        Set<Long> studentIds = new HashSet<>(subjectFeignClient.getStudentIdsBySubjectId(id));
        Page<StudentDTO> students =
                repository
                        .findByIdContaining(studentIds, pageable, "%" + search + "%")
                        .map(mapper::toDTO);
        return students.getContent().isEmpty()
                ? students
                : new PageImpl<>(
                        this.mapMissingValues(students.getContent()),
                        pageable,
                        students.getTotalElements());
    }

    public Long findThesisId(Long id) {
        return this.thesisService.findByStudentId(id).getId();
    }
}