package com.zahara.lms.subject.service;

import com.zahara.lms.shared.exception.ForbiddenException;
import com.zahara.lms.shared.exception.NotFoundException;
import com.zahara.lms.shared.service.ExtendedService;
import com.zahara.lms.subject.client.FacultyFeignClient;
import com.zahara.lms.subject.dto.AssignmentGradeDTO;
import com.zahara.lms.subject.dto.SubjectDTO;
import com.zahara.lms.subject.dto.SubjectEnrollmentDTO;
import com.zahara.lms.subject.mapper.SubjectEnrollmentMapper;
import com.zahara.lms.subject.model.Subject;
import com.zahara.lms.subject.model.SubjectEnrollment;
import com.zahara.lms.subject.repository.SubjectEnrollmentRepository;
import com.zahara.lms.subject.util.Utility;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import static com.zahara.lms.shared.security.SecurityUtils.*;

@Service
public class SubjectEnrollmentService
        extends ExtendedService<SubjectEnrollment, SubjectEnrollmentDTO, Long> {
    private final SubjectEnrollmentRepository repository;
    private final SubjectEnrollmentMapper mapper;
    private final SubjectService subjectService;
    private final FacultyFeignClient facultyFeignClient;

    public SubjectEnrollmentService(
            SubjectEnrollmentRepository repository,
            SubjectEnrollmentMapper mapper,
            SubjectService subjectService,
            FacultyFeignClient facultyFeignClient) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
        this.subjectService = subjectService;
        this.facultyFeignClient = facultyFeignClient;
    }

    @Override
    public List<SubjectEnrollmentDTO> findById(Set<Long> ids) {
        List<SubjectEnrollment> subjectEnrollments =
                (List<SubjectEnrollment>) repository.findAllById(ids);

        if (hasAuthority(ROLE_STUDENT)) {
            Long studentId = getStudentId();
            boolean forbidden =
                    subjectEnrollments.stream()
                            .anyMatch(
                                    subjectEnrollment ->
                                            !subjectEnrollment.getStudentId().equals(studentId));
            if (forbidden) {
                throw new ForbiddenException(
                        "You are not allowed to view these subject enrollments a");
            }
        }

        if (hasAuthority(ROLE_TEACHER)) {
            List<Subject> subjects =
                    subjectEnrollments.stream().map(SubjectEnrollment::getSubject).toList();

            Long teacherId = getTeacherId();
            boolean forbidden =
                    subjects.stream()
                            .anyMatch(
                                    subject ->
                                            !subject.getProfessorId().equals(teacherId)
                                                    && !subject.getAssistantId().equals(teacherId));
            if (forbidden) {
                throw new ForbiddenException(
                        "You are not allowed to view these subject enrollments b");
            }
        }

        List<SubjectEnrollmentDTO> subjectEnrollmentsDTO = mapper.toDTO(subjectEnrollments);
        return subjectEnrollmentsDTO.isEmpty()
                ? subjectEnrollmentsDTO
                : this.mapMissingValues(subjectEnrollmentsDTO);
    }

    @Override
    protected List<SubjectEnrollmentDTO> mapMissingValues(
            List<SubjectEnrollmentDTO> subjectEnrollments) {
        map(
                subjectEnrollments,
                SubjectEnrollmentDTO::getStudent,
                SubjectEnrollmentDTO::setStudent,
                facultyFeignClient::getStudent);
        map(
                subjectEnrollments,
                (subjectEnrollment) -> subjectEnrollment.getSubject().getProfessor(),
                (subjectEnrollment, professor) ->
                        subjectEnrollment.getSubject().setProfessor(professor),
                facultyFeignClient::getTeacher);
        map(
                subjectEnrollments,
                (subjectEnrollment) -> subjectEnrollment.getSubject().getAssistant(),
                (subjectEnrollment, assistant) ->
                        subjectEnrollment.getSubject().setAssistant(assistant),
                facultyFeignClient::getTeacher);

        return subjectEnrollments;
    }

    public List<SubjectEnrollmentDTO> findByStudentId(Long id) {
        if (hasAuthority(ROLE_STUDENT) && !id.equals(getStudentId())) {
            throw new ForbiddenException("You are not allowed to view these subject enrollments c");
        }

        List<SubjectEnrollmentDTO> subjectEnrollments =
                mapper.toDTO(repository.findByStudentIdAndDeletedFalse(id));
        return subjectEnrollments.isEmpty()
                ? subjectEnrollments
                : this.mapMissingValues(subjectEnrollments);
    }

    public Page<SubjectEnrollmentDTO> findBySubjectId(Long id, Pageable pageable, String search) {
        if (hasAuthority(ROLE_TEACHER)) {
            List<SubjectDTO> subjects = subjectService.findById(Set.of(id));
            if (subjects.isEmpty()) {
                throw new NotFoundException("Subject not found");
            }

            SubjectDTO subject = subjects.get(0);
            Long teacherId = getTeacherId();
            if (!subject.getProfessor().getId().equals(teacherId)
                    && !subject.getAssistant().getId().equals(teacherId)) {
                throw new ForbiddenException(
                        "You are not allowed to view these subject enrollments d");
            }
        }

        Page<SubjectEnrollmentDTO> subjectEnrollments =
                repository
                        .findBySubjectIdContaining(id, pageable, "%" + search + "%")
                        .map(mapper::toDTO);

        return subjectEnrollments.getContent().isEmpty()
                ? subjectEnrollments
                : new PageImpl<>(
                        this.mapMissingValues(subjectEnrollments.getContent()),
                        pageable,
                        subjectEnrollments.getTotalElements());
    }

    public List<SubjectEnrollmentDTO> findBySubjectId(Long id) {
        if (hasAuthority(ROLE_TEACHER)) {
            List<SubjectDTO> subjects = subjectService.findById(Set.of(id));
            if (subjects.isEmpty()) {
                throw new NotFoundException("Subject not found");
            }

            SubjectDTO subject = subjects.get(0);
            Long teacherId = getTeacherId();
            if (!subject.getProfessor().getId().equals(teacherId)
                    && !subject.getAssistant().getId().equals(teacherId)) {
                throw new ForbiddenException(
                        "You are not allowed to view these subject enrollments d");
            }
        }

        List<SubjectEnrollmentDTO> subjectEnrollments =
                mapper.toDTO(repository.findBySubjectIdAndDeletedFalse(id));
        return subjectEnrollments.isEmpty() ? subjectEnrollments : this.mapMissingValues(subjectEnrollments);
    }


    public Page<SubjectEnrollmentDTO> findByStudentId(Long id, Pageable pageable, String search) {
        if (hasAuthority(ROLE_STUDENT) && !id.equals(getStudentId())) {
            throw new ForbiddenException("You are not allowed to view this subject enrollments e");
        }

        Page<SubjectEnrollmentDTO> subjectEnrollments =
                repository
                        .findByStudentIdContaining(id, pageable, "%" + search + "%")
                        .map(mapper::toDTO);

        return subjectEnrollments.getContent().isEmpty()
                ? subjectEnrollments
                : new PageImpl<>(
                        this.mapMissingValues(subjectEnrollments.getContent()),
                        pageable,
                        subjectEnrollments.getTotalElements());
    }

    public List<Long> findStudentsIdsBySubjectId(Long id) {
        if (hasAuthority(ROLE_TEACHER)) {
            List<SubjectDTO> subjects = subjectService.findById(Set.of(id));
            if (subjects.isEmpty()) {
                throw new NotFoundException("Subject not found");
            }

            SubjectDTO subject = subjects.get(0);
            Long teacherId = getTeacherId();
            if (!subject.getProfessor().getId().equals(teacherId)
                    && !subject.getAssistant().getId().equals(teacherId)) {
                throw new ForbiddenException("You are not allowed to view these student ids");
            }
        }

        return repository.findBySubjectIdAndDeletedFalse(id).stream()
                .map(SubjectEnrollment::getStudentId)
                .toList();
    }

    public List<Integer> findTotalECTSByStudentId(List<Long> ids) {
        if (hasAuthority(ROLE_STUDENT) && (ids.size() > 1 || !ids.contains(getStudentId()))) {
            throw new ForbiddenException("You are not allowed to view total ECTS for this student");
        }

        List<Integer> totalECTs = new ArrayList<>(ids.size());
        ids.forEach(
                id -> {
                    List<SubjectEnrollment> subjectEnrollments =
                            repository.findByStudentIdAndDeletedFalse(id).stream()
                                    .filter(
                                            subjectEnrollment ->
                                                    subjectEnrollment.getGrade() != null)
                                    .toList();

                    totalECTs.add(
                            subjectEnrollments.stream()
                                    .map(SubjectEnrollment::getSubject)
                                    .map(Subject::getEcts)
                                    .reduce(0, Integer::sum));
                });
        return totalECTs;
    }

    public List<Double> findAverageGradeByStudentId(List<Long> ids) {
        if (hasAuthority(ROLE_STUDENT) && (ids.size() > 1 || !ids.contains(getStudentId()))) {
            throw new ForbiddenException(
                    "You are not allowed to view average grade for this student");
        }

        List<Double> averageGrades = new ArrayList<>(ids.size());
        ids.forEach(
                id -> {
                    List<SubjectEnrollment> subjectEnrollments =
                            repository.findByStudentIdAndDeletedFalse(id).stream()
                                    .filter(
                                            subjectEnrollment ->
                                                    subjectEnrollment.getGrade() != null)
                                    .toList();

                    averageGrades.add(
                            subjectEnrollments.isEmpty()
                                    ? null
                                    : Utility.roundToTwoDecimals(
                                            Double.valueOf(
                                                            subjectEnrollments.stream()
                                                                    .map(
                                                                            SubjectEnrollment
                                                                                    ::getGrade)
                                                                    .reduce(0, Integer::sum))
                                                    / subjectEnrollments.size()));
                });
        return averageGrades;
    }

    @Transactional
    public SubjectEnrollmentDTO updateGrade(Long id, SubjectEnrollmentDTO subjectEnrollmentDTO) {
        SubjectEnrollment subjectEnrollment =
                repository
                        .findById(id)
                        .orElseThrow(() -> new NotFoundException("Subject enrollment not found"));

        if (hasAuthority(ROLE_TEACHER)) {
            Subject subject = subjectEnrollment.getSubject();
            Long teacherId = getTeacherId();
            if (!subject.getProfessorId().equals(teacherId)
                    && !subject.getAssistantId().equals(teacherId)) {
                throw new ForbiddenException(
                        "You are not allowed to update grade for this subject enrollment");
            }
        }

        subjectEnrollment.setExtraPoints(subjectEnrollmentDTO.getExtraPoints());
        subjectEnrollment.setGrade(subjectEnrollmentDTO.getGrade());

        return mapper.toDTO(repository.save(subjectEnrollment));
    }
}
