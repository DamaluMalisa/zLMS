package com.zahara.lms.subject.service;

import com.zahara.lms.shared.exception.ForbiddenException;
import com.zahara.lms.shared.exception.NotFoundException;
import com.zahara.lms.shared.service.ExtendedService;
import com.zahara.lms.subject.client.FacultyFeignClient;
import com.zahara.lms.subject.dto.*;
import com.zahara.lms.subject.dto.AssignmentDTO;
import com.zahara.lms.subject.mapper.AssignmentMapper;
import com.zahara.lms.subject.model.Assignment;
import com.zahara.lms.subject.model.Subject;
import com.zahara.lms.subject.repository.BundleRepository;
import com.zahara.lms.subject.repository.AssignmentRepository;
import com.zahara.lms.subject.repository.SubjectRepository;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

import static com.zahara.lms.shared.security.SecurityUtils.*;
import static com.zahara.lms.shared.security.SecurityUtils.getTeacherId;

@Service
public class AssignmentService  extends ExtendedService<Assignment, AssignmentDTO, Long> {
    private final AssignmentRepository repository;
    private final AssignmentMapper mapper;
    private final BundleRepository bundleRepository;
    private final SubjectRepository subjectRepository;
    private final FacultyFeignClient facultyFeignClient;

    public AssignmentService(
            AssignmentRepository repository,
            AssignmentMapper mapper,
            BundleRepository bundleRepository,
            SubjectRepository subjectRepository,
            FacultyFeignClient facultyFeignClient) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
        this.bundleRepository = bundleRepository;
        this.facultyFeignClient = facultyFeignClient;
        this.subjectRepository = subjectRepository;
    }

//    @Override
//    @Transactional
//    public AssignmentDTO save(AssignmentDTO assignmentDTO) {
//        if (hasAuthority(ROLE_TEACHER)) {
//            TeacherDTO teacher = facultyFeignClient.getTeacher(Set.of(getTeacherId())).get(0);
//            SubjectDTO subject = assignmentDTO.getBundle().getSubject();
//            if (!subject.getProfessor().getId().equals(teacher.getId())
//                    && !subject.getAssistant().getId().equals(teacher.getId())) {
//                throw new ForbiddenException(
//                        "You are not allowed manage this Assignment");
//            }
//
//            if (assignmentDTO.getTeacher() == null) {
//                assignmentDTO.setTeacher(teacher);
//            }
//        }
//
//        return super.save(assignmentDTO);
//    }
//
//    @Override
//    @Transactional
//    public void delete(Set<Long> id) {
//        if (hasAuthority(ROLE_TEACHER)) {
//            Long teacherId = getTeacherId();
//            List<Assignment> assignments =
//                    (List<Assignment>) repository.findAllById(id);
//            boolean forbidden =
//                    assignments.stream()
//                            .anyMatch(
//                                    assignment -> {
//                                        Subject subject = assignment.getBundle().getSubject();
//                                        return !subject.getProfessorId().equals(teacherId)
//                                                && !subject.getAssistantId().equals(teacherId);
//                                    });
//            if (forbidden) {
//                throw new ForbiddenException(
//                        "You are not allowed to delete these Assignments");
//            }
//        }
//
//        super.delete(id);
//    }


    @Override
    protected List<AssignmentDTO> mapMissingValues(List<AssignmentDTO> assignments) {
        map(
                assignments,
                AssignmentDTO::getTeacher,
                AssignmentDTO::setTeacher,
                facultyFeignClient::getTeacher);

        return assignments;
    }


    public List<AssignmentDTO> findByBundleId(Long id) {
        if (!bundleRepository.existsById(id)) {
            throw new NotFoundException("Bundle not found");
        }

        List<AssignmentDTO> assignments =
                mapper.toDTO(
                        repository.findByBundleIdAndDeletedFalseOrderByTimestampDesc(id));
        return assignments.isEmpty()
                ? assignments
                : this.mapMissingValues(assignments);
    }

    public Page<AssignmentDTO> findByBundleId(Long id, Pageable pageable, String search) {
        if (!bundleRepository.existsById(id)) {
            throw new NotFoundException("Bundle not found");
        }

        Page<AssignmentDTO> assignments =
                repository
                        .findByBundleIdContaining(id, pageable, "%" + search + "%")
                        .map(mapper::toDTO);
        return assignments.getContent().isEmpty()
                ? assignments
                : new PageImpl<>(
                this.mapMissingValues(assignments.getContent()),
                pageable,
                assignments.getTotalElements());
    }

    public List<AssignmentDTO> findBySubjectId(Long id) {
        if (!subjectRepository.existsById(id)) {
            throw new NotFoundException("Bundle not found");
        }

        List<AssignmentDTO> assignments =
                mapper.toDTO(
                        repository.findBySubjectIdAndDeletedFalseOrderByTimestampDesc(id));
        return assignments.isEmpty()
                ? assignments
                : this.mapMissingValues(assignments);
    }

    public Page<AssignmentDTO> findBySubjectId(Long id, Pageable pageable, String search) {
        if (!subjectRepository.existsById(id)) {
            throw new NotFoundException("Bundle not found");
        }

        Page<AssignmentDTO> assignments =
                repository
                        .findByBundleIdContaining(id, pageable, "%" + search + "%")
                        .map(mapper::toDTO);
        return assignments.getContent().isEmpty()
                ? assignments
                : new PageImpl<>(
                this.mapMissingValues(assignments.getContent()),
                pageable,
                assignments.getTotalElements());
    }
}
