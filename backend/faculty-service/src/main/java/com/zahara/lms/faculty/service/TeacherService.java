package com.zahara.lms.faculty.service;

import com.zahara.lms.faculty.client.UserFeignClient;
import com.zahara.lms.faculty.dto.TeacherDTO;
import com.zahara.lms.faculty.mapper.TeacherMapper;
import com.zahara.lms.faculty.model.Teacher;
import com.zahara.lms.faculty.repository.TeacherRepository;
import com.zahara.lms.shared.dto.RoleDTO;
import com.zahara.lms.shared.dto.UserDTO;
import com.zahara.lms.shared.dto.UserDetailsDTO;
import com.zahara.lms.shared.exception.NotFoundException;
import com.zahara.lms.shared.service.ExtendedService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static com.zahara.lms.shared.security.SecurityUtils.ROLE_TEACHER;
import static com.zahara.lms.shared.security.SecurityUtils.ROLE_TEACHER_ID;

@Service
public class TeacherService extends ExtendedService<Teacher, TeacherDTO, Long> {
    private final TeacherRepository repository;
    private final TeacherMapper mapper;
    private final UserFeignClient userFeignClient;

    public TeacherService(
            TeacherRepository repository, TeacherMapper mapper, UserFeignClient userFeignClient) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
        this.userFeignClient = userFeignClient;
    }

    @Override
    @Transactional
    public TeacherDTO save(TeacherDTO teacher) {
        UserDTO userRequest = teacher.getUser();
        UserDTO userResponse =
                userRequest.getId() == null
                        ? userFeignClient.createUser(
                                UserDetailsDTO.builder()
                                        .username(userRequest.getUsername())
                                        .password(userRequest.getPassword())
                                        .authorities(
                                                Set.of(
                                                        RoleDTO.builder()
                                                                .id(ROLE_TEACHER_ID)
                                                                .authority(ROLE_TEACHER)
                                                                .build()))
                                        .build())
                        : userFeignClient.patchUser(userRequest.getId(), userRequest);
        teacher.setUser(userResponse);
        return super.save(teacher);
    }

    @Override
    @Transactional
    public void delete(Set<Long> id) {
        List<Teacher> teachers = (List<Teacher>) repository.findAllById(id);
        Set<Long> userIds = teachers.stream().map(Teacher::getUserId).collect(Collectors.toSet());
        userFeignClient.deleteUser(userIds);
        repository.softDeleteByIds(id);
    }

    @Override
    protected List<TeacherDTO> mapMissingValues(List<TeacherDTO> teachers) {
        map(teachers, TeacherDTO::getUser, TeacherDTO::setUser, userFeignClient::getUser);
        return teachers;
    }

    public TeacherDTO findByUserId(Long userId) {
        Teacher teacher =
                repository
                        .findByUserId(userId)
                        .orElseThrow(() -> new NotFoundException("User id not found"));
        return mapper.toDTO(teacher);
    }
}
