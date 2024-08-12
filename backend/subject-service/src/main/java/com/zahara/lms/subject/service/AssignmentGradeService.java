package com.zahara.lms.subject.service;

import com.zahara.lms.shared.exception.ForbiddenException;
import com.zahara.lms.shared.exception.NotFoundException;
import com.zahara.lms.shared.service.ExtendedService;
import com.zahara.lms.subject.client.FacultyFeignClient;
import com.zahara.lms.subject.dto.AssignmentDTO;
import com.zahara.lms.subject.dto.AssignmentGradeDTO;
import com.zahara.lms.subject.dto.AssignmentSubmissionDTO;
import com.zahara.lms.subject.dto.SubjectDTO;
import com.zahara.lms.subject.mapper.AssignmentGradeMapper;
import com.zahara.lms.subject.model.AssignmentGrade;
import com.zahara.lms.subject.repository.AssignmentGradeRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

import static com.zahara.lms.shared.security.SecurityUtils.*;

@Service
public class AssignmentGradeService
        extends ExtendedService<AssignmentGrade, AssignmentGradeDTO, Long> {
    private final AssignmentGradeRepository repository;
    private final AssignmentGradeMapper mapper;
    private final AssignmentSubmissionService assignmentSubmissionService;
    private final AssignmentService assignmentService;
    private final SubjectService subjectService;
    private final FacultyFeignClient facultyFeignClient;

    public AssignmentGradeService(
            AssignmentGradeRepository repository,
            AssignmentGradeMapper mapper,
            AssignmentSubmissionService assignmentSubmissionService,
            AssignmentService assignmentService,
            SubjectService subjectService,
            FacultyFeignClient facultyFeignClient) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
        this.assignmentSubmissionService = assignmentSubmissionService;
        this.assignmentService = assignmentService;
        this.subjectService = subjectService;
        this.facultyFeignClient = facultyFeignClient;
    }

    @Override
    public List<AssignmentGradeDTO> findById(Set<Long> ids) {
        List<AssignmentGrade> assignmentGrades =
                (List<AssignmentGrade>) repository.findAllById(ids);

        if (hasAuthority(ROLE_STUDENT)) {
            Long studentId = getStudentId();
            boolean forbidden =
                    assignmentGrades.stream()
                            .anyMatch(
                                    assignmentGrade ->
                                            !assignmentGrade.getStudentId().equals(studentId));
            if (forbidden) {
                throw new ForbiddenException(
                        "You are not allowed to view these Assignment Grade");
            }
        }


        List<AssignmentGradeDTO> assignmentGradesDTO = mapper.toDTO(assignmentGrades);
        return assignmentGradesDTO.isEmpty()
                ? assignmentGradesDTO
                : this.mapMissingValues(assignmentGradesDTO);
    }

    @Override
    protected List<AssignmentGradeDTO> mapMissingValues(
            List<AssignmentGradeDTO> assignmentGrades) {
        map(
                assignmentGrades,
                AssignmentGradeDTO::getStudent,
                AssignmentGradeDTO::setStudent,
                facultyFeignClient::getStudent);
        return assignmentGrades;
    }

    public List<AssignmentGradeDTO> findByStudentId(Long id) {
        if (hasAuthority(ROLE_STUDENT) && !id.equals(getStudentId())) {
            throw new ForbiddenException("You are not allowed to view these subject enrollments c");
        }

        List<AssignmentGradeDTO> assignmentGrades =
                mapper.toDTO(repository.findByStudentIdAndDeletedFalse(id));
        return assignmentGrades.isEmpty()
                ? assignmentGrades
                : this.mapMissingValues(assignmentGrades);
    }


    public Page<AssignmentGradeDTO> findByStudentId(Long id, Pageable pageable, String search) {
        if (hasAuthority(ROLE_STUDENT) && !id.equals(getStudentId())) {
            throw new ForbiddenException("You are not allowed to view this Assessment Grades");
        }

        Page<AssignmentGradeDTO> assignmentGrades =
                repository
                        .findByStudentIdContaining(id, pageable, "%" + search + "%")
                        .map(mapper::toDTO);

        return assignmentGrades.getContent().isEmpty()
                ? assignmentGrades
                : new PageImpl<>(
                this.mapMissingValues(assignmentGrades.getContent()),
                pageable,
                assignmentGrades.getTotalElements());
    }

    public Page<AssignmentGradeDTO> findByAssignmentSubmissionId(Long id, Pageable pageable, String search) {
        if (hasAuthority(ROLE_TEACHER)) {
            List<AssignmentSubmissionDTO> assignmentSubmissions = assignmentSubmissionService.findById(Set.of(id));
            if (assignmentSubmissions.isEmpty()) {
                throw new NotFoundException("Assignment Submission not found");
            }

            AssignmentSubmissionDTO assignmentSubmission = assignmentSubmissions.get(0);
            Long teacherId = getTeacherId();
            if (!assignmentSubmission.getAssignment().getBundle().getSubject().getProfessor().getId().equals(teacherId)
                    && !assignmentSubmission.getAssignment().getBundle().getSubject().getAssistant().getId().equals(teacherId)) {
                throw new ForbiddenException(
                        "You are not allowed to view these assignment submissions");
            }
        }

        Page<AssignmentGradeDTO> assignmentGrades =
                repository
                        .findByAssignmentSubmissionIdContaining(id, pageable, "%" + search + "%")
                        .map(mapper::toDTO);

        return assignmentGrades.getContent().isEmpty()
                ? assignmentGrades
                : new PageImpl<>(
                this.mapMissingValues(assignmentGrades.getContent()),
                pageable,
                assignmentGrades.getTotalElements());
    }

    public List<AssignmentGradeDTO> findByAssignmentSubmissionId(Long id) {
        if (hasAuthority(ROLE_TEACHER)) {
            List<AssignmentSubmissionDTO> assignmentSubmissions = assignmentSubmissionService.findById(Set.of(id));
            if (assignmentSubmissions.isEmpty()) {
                throw new NotFoundException("Assignment Submission not found");
            }

            AssignmentSubmissionDTO assignmentSubmission = assignmentSubmissions.get(0);
            Long teacherId = getTeacherId();
            if (!assignmentSubmission.getAssignment().getBundle().getSubject().getProfessor().getId().equals(teacherId)
                    && !assignmentSubmission.getAssignment().getBundle().getSubject().getAssistant().getId().equals(teacherId)) {
                throw new ForbiddenException(
                        "You are not allowed to view these assignment submissions");
            }
        }
        List<AssignmentGradeDTO> assignmentGrades =
                mapper.toDTO(repository.findByAssignmentSubmissionIdAndDeletedFalse(id));
        return assignmentGrades.isEmpty() ? assignmentGrades : this.mapMissingValues(assignmentGrades);
    }

    public List<AssignmentGradeDTO> findByAssignmentId(Long id) {
        if (hasAuthority(ROLE_TEACHER)) {
            List<AssignmentDTO> assignments = assignmentService.findById(Set.of(id));
            if (assignments.isEmpty()) {
                throw new NotFoundException("Assignment not found");
            }

//            AssignmentSubmissionDTO assignmentSubmission = assignmentSubmissions.get(0);
//            Long teacherId = getTeacherId();
//            if (!assignmentSubmission.getAssignment().getBundle().getSubject().getProfessor().getId().equals(teacherId)
//                    && !assignmentSubmission.getAssignment().getBundle().getSubject().getAssistant().getId().equals(teacherId)) {
//                throw new ForbiddenException(
//                        "You are not allowed to view these assignment submissions");
//            }
        }
        List<AssignmentGradeDTO> assignmentGrades =
                mapper.toDTO(repository.findByAssignmentSubmissionAssignmentIdAndDeletedFalse(id));
        return assignmentGrades.isEmpty() ? assignmentGrades : this.mapMissingValues(assignmentGrades);
    }

    public List<AssignmentGradeDTO> findBySubjectId(Long id) {
        if (hasAuthority(ROLE_TEACHER)) {
            List<SubjectDTO> subjects = subjectService.findById(Set.of(id));
            if (subjects.isEmpty()) {
                throw new NotFoundException("Subject not found");
            }

//            AssignmentSubmissionDTO assignmentSubmission = assignmentSubmissions.get(0);
//            Long teacherId = getTeacherId();
//            if (!assignmentSubmission.getAssignment().getSubject().getProfessor().getId().equals(teacherId)
//                    && !assignmentSubmission.getAssignment().getSubject().getAssistant().getId().equals(teacherId)) {
//                throw new ForbiddenException(
//                        "You are not allowed to view these assignment submissions");
//            }
        }
        List<AssignmentGradeDTO> assignmentGrades =
                mapper.toDTO(repository.findByAssignmentSubmissionAssignmentSubjectIdAndDeletedFalse(id));
        return assignmentGrades.isEmpty() ? assignmentGrades : this.mapMissingValues(assignmentGrades);
    }
}
