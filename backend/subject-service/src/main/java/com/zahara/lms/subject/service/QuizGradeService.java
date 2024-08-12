package com.zahara.lms.subject.service;

import com.zahara.lms.shared.exception.ForbiddenException;
import com.zahara.lms.shared.exception.NotFoundException;
import com.zahara.lms.shared.service.ExtendedService;
import com.zahara.lms.subject.client.FacultyFeignClient;
import com.zahara.lms.subject.dto.QuizGradeDTO;
import com.zahara.lms.subject.dto.QuizSubmissionDTO;
import com.zahara.lms.subject.mapper.QuizGradeMapper;
import com.zahara.lms.subject.model.QuizGrade;
import com.zahara.lms.subject.repository.QuizGradeRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

import static com.zahara.lms.shared.security.SecurityUtils.*;

@Service
public class QuizGradeService
        extends ExtendedService<QuizGrade, QuizGradeDTO, Long> {
    private final QuizGradeRepository repository;
    private final QuizGradeMapper mapper;
    private final QuizSubmissionService quizSubmissionService;
    private final FacultyFeignClient facultyFeignClient;

    public QuizGradeService(
            QuizGradeRepository repository,
            QuizGradeMapper mapper,
            QuizSubmissionService quizSubmissionService,
            FacultyFeignClient facultyFeignClient) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
        this.quizSubmissionService = quizSubmissionService;
        this.facultyFeignClient = facultyFeignClient;
    }

    @Override
    public List<QuizGradeDTO> findById(Set<Long> ids) {
        List<QuizGrade> quizGrades =
                (List<QuizGrade>) repository.findAllById(ids);

        if (hasAuthority(ROLE_STUDENT)) {
            Long studentId = getStudentId();
            boolean forbidden =
                    quizGrades.stream()
                            .anyMatch(
                                    quizGrade ->
                                            !quizGrade.getStudentId().equals(studentId));
            if (forbidden) {
                throw new ForbiddenException(
                        "You are not allowed to view these Quiz Grade");
            }
        }


        List<QuizGradeDTO> quizGradesDTO = mapper.toDTO(quizGrades);
        return quizGradesDTO.isEmpty()
                ? quizGradesDTO
                : this.mapMissingValues(quizGradesDTO);
    }

    @Override
    protected List<QuizGradeDTO> mapMissingValues(
            List<QuizGradeDTO> quizGrades) {
        map(
                quizGrades,
                QuizGradeDTO::getStudent,
                QuizGradeDTO::setStudent,
                facultyFeignClient::getStudent);
        return quizGrades;
    }

    public List<QuizGradeDTO> findByStudentId(Long id) {
        if (hasAuthority(ROLE_STUDENT) && !id.equals(getStudentId())) {
            throw new ForbiddenException("You are not allowed to view these subject enrollments c");
        }

        List<QuizGradeDTO> quizGrades =
                mapper.toDTO(repository.findByStudentIdAndDeletedFalse(id));
        return quizGrades.isEmpty()
                ? quizGrades
                : this.mapMissingValues(quizGrades);
    }


    public Page<QuizGradeDTO> findByStudentId(Long id, Pageable pageable, String search) {
        if (hasAuthority(ROLE_STUDENT) && !id.equals(getStudentId())) {
            throw new ForbiddenException("You are not allowed to view this Assessment Grades");
        }

        Page<QuizGradeDTO> quizGrades =
                repository
                        .findByStudentIdContaining(id, pageable, "%" + search + "%")
                        .map(mapper::toDTO);

        return quizGrades.getContent().isEmpty()
                ? quizGrades
                : new PageImpl<>(
                this.mapMissingValues(quizGrades.getContent()),
                pageable,
                quizGrades.getTotalElements());
    }

    public Page<QuizGradeDTO> findByQuizSubmissionId(Long id, Pageable pageable, String search) {
        if (hasAuthority(ROLE_TEACHER)) {
            List<QuizSubmissionDTO> quizSubmissions = quizSubmissionService.findById(Set.of(id));
            if (quizSubmissions.isEmpty()) {
                throw new NotFoundException("Quiz Submission not found");
            }

            QuizSubmissionDTO quizSubmission = quizSubmissions.get(0);
            Long teacherId = getTeacherId();
            if (!quizSubmission.getQuiz().getBundle().getSubject().getProfessor().getId().equals(teacherId)
                    && !quizSubmission.getQuiz().getBundle().getSubject().getAssistant().getId().equals(teacherId)) {
                throw new ForbiddenException(
                        "You are not allowed to view these quiz submissions");
            }
        }

        Page<QuizGradeDTO> quizGrades =
                repository
                        .findByQuizSubmissionIdContaining(id, pageable, "%" + search + "%")
                        .map(mapper::toDTO);

        return quizGrades.getContent().isEmpty()
                ? quizGrades
                : new PageImpl<>(
                this.mapMissingValues(quizGrades.getContent()),
                pageable,
                quizGrades.getTotalElements());
    }

    public List<QuizGradeDTO> findByQuizSubmissionId(Long id) {
        if (hasAuthority(ROLE_TEACHER)) {
            List<QuizSubmissionDTO> quizSubmissions = quizSubmissionService.findById(Set.of(id));
            if (quizSubmissions.isEmpty()) {
                throw new NotFoundException("Quiz Submission not found");
            }

            QuizSubmissionDTO quizSubmission = quizSubmissions.get(0);
            Long teacherId = getTeacherId();
            if (!quizSubmission.getQuiz().getBundle().getSubject().getProfessor().getId().equals(teacherId)
                    && !quizSubmission.getQuiz().getBundle().getSubject().getAssistant().getId().equals(teacherId)) {
                throw new ForbiddenException(
                        "You are not allowed to view these quiz submissions");
            }
        }
        List<QuizGradeDTO> quizGrades =
                mapper.toDTO(repository.findByQuizSubmissionIdAndDeletedFalse(id));
        return quizGrades.isEmpty() ? quizGrades : this.mapMissingValues(quizGrades);
    }
}
