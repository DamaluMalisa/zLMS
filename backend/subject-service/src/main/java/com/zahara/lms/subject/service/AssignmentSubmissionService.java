package com.zahara.lms.subject.service;

import com.zahara.lms.shared.exception.ForbiddenException;
import com.zahara.lms.shared.exception.NotFoundException;
import com.zahara.lms.shared.service.ExtendedService;
import com.zahara.lms.subject.client.FacultyFeignClient;
import com.zahara.lms.subject.dto.AssignmentDTO;
import com.zahara.lms.subject.dto.AssignmentSubmissionDTO;
import com.zahara.lms.subject.mapper.AssignmentSubmissionMapper;
import com.zahara.lms.subject.model.AssignmentSubmission;
import com.zahara.lms.subject.repository.AssignmentSubmissionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

import static com.zahara.lms.shared.security.SecurityUtils.*;

@Service
public class AssignmentSubmissionService
        extends ExtendedService<AssignmentSubmission, AssignmentSubmissionDTO, Long> {
    private final AssignmentSubmissionRepository repository;
    private final AssignmentSubmissionMapper mapper;
    private final AssignmentService assignmentService;
    private final FacultyFeignClient facultyFeignClient;

    public AssignmentSubmissionService(
            AssignmentSubmissionRepository repository,
            AssignmentSubmissionMapper mapper,
            AssignmentService assignmentService,
            FacultyFeignClient facultyFeignClient) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
        this.assignmentService = assignmentService;
        this.facultyFeignClient = facultyFeignClient;
    }

    @Override
    public List<AssignmentSubmissionDTO> findById(Set<Long> ids) {
        List<AssignmentSubmission> assignmentSubmissions =
                (List<AssignmentSubmission>) repository.findAllById(ids);

        if (hasAuthority(ROLE_STUDENT)) {
            Long studentId = getStudentId();
            boolean forbidden =
                    assignmentSubmissions.stream()
                            .anyMatch(
                                    assignmentSubmission ->
                                            !assignmentSubmission.getStudentId().equals(studentId));
            if (forbidden) {
                throw new ForbiddenException(
                        "You are not allowed to view these Assignment Submission");
            }
        }


        List<AssignmentSubmissionDTO> assignmentSubmissionsDTO = mapper.toDTO(assignmentSubmissions);
        return assignmentSubmissionsDTO.isEmpty()
                ? assignmentSubmissionsDTO
                : this.mapMissingValues(assignmentSubmissionsDTO);
    }

    @Override
    protected List<AssignmentSubmissionDTO> mapMissingValues(
            List<AssignmentSubmissionDTO> assignmentSubmissions) {
        map(
                assignmentSubmissions,
                AssignmentSubmissionDTO::getStudent,
                AssignmentSubmissionDTO::setStudent,
                facultyFeignClient::getStudent);
        return assignmentSubmissions;
    }

    public List<AssignmentSubmissionDTO> findByStudentId(Long id) {
        if (hasAuthority(ROLE_STUDENT) && !id.equals(getStudentId())) {
            throw new ForbiddenException("You are not allowed to view these subject enrollments c");
        }

        List<AssignmentSubmissionDTO> assignmentSubmissions =
                mapper.toDTO(repository.findByStudentIdAndDeletedFalseOrderBySubmissionTimestampDesc(id));
        return assignmentSubmissions.isEmpty()
                ? assignmentSubmissions
                : this.mapMissingValues(assignmentSubmissions);
    }


    public Page<AssignmentSubmissionDTO> findByStudentId(Long id, Pageable pageable, String search) {
        if (hasAuthority(ROLE_STUDENT) && !id.equals(getStudentId())) {
            throw new ForbiddenException("You are not allowed to view this Assessment Submissions");
        }

        Page<AssignmentSubmissionDTO> assignmentSubmissions =
                repository
                        .findByStudentIdContaining(id, pageable, "%" + search + "%")
                        .map(mapper::toDTO);

        return assignmentSubmissions.getContent().isEmpty()
                ? assignmentSubmissions
                : new PageImpl<>(
                this.mapMissingValues(assignmentSubmissions.getContent()),
                pageable,
                assignmentSubmissions.getTotalElements());
    }

    public Page<AssignmentSubmissionDTO> findByAssignmentId(Long id, Pageable pageable, String search) {
//        if (hasAuthority(ROLE_TEACHER)) {
            List<AssignmentDTO> assignments = assignmentService.findById(Set.of(id));
            if (assignments.isEmpty()) {
                throw new NotFoundException("Assignment not found");
            }

//            AssignmentDTO assignment = assignments.get(0);
//            Long teacherId = getTeacherId();
//            if (!assignment.getBundle().getSubject().getProfessor().getId().equals(teacherId)
//                    && !assignment.getBundle().getSubject().getAssistant().getId().equals(teacherId)) {
//                throw new ForbiddenException(
//                        "You are not allowed to view these subject enrollments d");
//            }
//        }

        Page<AssignmentSubmissionDTO> assignmentSubmissions =
                repository
                        .findByAssignmentIdContaining(id, pageable, "%" + search + "%")
                        .map(mapper::toDTO);

        return assignmentSubmissions.getContent().isEmpty()
                ? assignmentSubmissions
                : new PageImpl<>(
                this.mapMissingValues(assignmentSubmissions.getContent()),
                pageable,
                assignmentSubmissions.getTotalElements());
    }

    public List<AssignmentSubmissionDTO> findByAssignmentId(Long id) {
//        if (hasAuthority(ROLE_TEACHER)) {
//            List<AssignmentDTO> assignments = assignmentService.findById(Set.of(id));
//            if (assignments.isEmpty()) {
//                throw new NotFoundException("Assignment not found");
//            }
//
//            AssignmentDTO assignment = assignments.get(0);
//            Long teacherId = getTeacherId();
//            if (!assignment.getBundle().getSubject().getProfessor().getId().equals(teacherId)
//                    && !assignment.getBundle().getSubject().getAssistant().getId().equals(teacherId)) {
//                throw new ForbiddenException(
//                        "You are not allowed to view these subject enrollments d");
//            }
//        }
        List<AssignmentSubmissionDTO> assignmentSubmissions =
                mapper.toDTO(repository.findByAssignmentIdAndDeletedFalseOrderBySubmissionTimestampDesc(id));
        return assignmentSubmissions.isEmpty() ? assignmentSubmissions : this.mapMissingValues(assignmentSubmissions);
    }
}
