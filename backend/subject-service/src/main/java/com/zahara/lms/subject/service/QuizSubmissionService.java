package com.zahara.lms.subject.service;

import com.zahara.lms.shared.exception.ForbiddenException;
import com.zahara.lms.shared.exception.NotFoundException;
import com.zahara.lms.shared.service.ExtendedService;
import com.zahara.lms.subject.client.FacultyFeignClient;
import com.zahara.lms.subject.dto.QuizDTO;
import com.zahara.lms.subject.dto.QuizSubmissionDTO;
import com.zahara.lms.subject.mapper.QuizSubmissionMapper;
import com.zahara.lms.subject.model.QuizSubmission;
import com.zahara.lms.subject.repository.QuizSubmissionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

import static com.zahara.lms.shared.security.SecurityUtils.*;

@Service
public class QuizSubmissionService
        extends ExtendedService<QuizSubmission, QuizSubmissionDTO, Long> {
    private final QuizSubmissionRepository repository;
    private final QuizSubmissionMapper mapper;
    private final QuizService quizService;
    private final FacultyFeignClient facultyFeignClient;

    public QuizSubmissionService(
            QuizSubmissionRepository repository,
            QuizSubmissionMapper mapper,
            QuizService quizService,
            FacultyFeignClient facultyFeignClient) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
        this.quizService = quizService;
        this.facultyFeignClient = facultyFeignClient;
    }

    @Override
    public List<QuizSubmissionDTO> findById(Set<Long> ids) {
        List<QuizSubmission> quizSubmissions =
                (List<QuizSubmission>) repository.findAllById(ids);

        if (hasAuthority(ROLE_STUDENT)) {
            Long studentId = getStudentId();
            boolean forbidden =
                    quizSubmissions.stream()
                            .anyMatch(
                                    quizSubmission ->
                                            !quizSubmission.getStudentId().equals(studentId));
            if (forbidden) {
                throw new ForbiddenException(
                        "You are not allowed to view these Quiz Submission");
            }
        }


        List<QuizSubmissionDTO> quizSubmissionsDTO = mapper.toDTO(quizSubmissions);
        return quizSubmissionsDTO.isEmpty()
                ? quizSubmissionsDTO
                : this.mapMissingValues(quizSubmissionsDTO);
    }

    @Override
    protected List<QuizSubmissionDTO> mapMissingValues(
            List<QuizSubmissionDTO> quizSubmissions) {
        map(
                quizSubmissions,
                QuizSubmissionDTO::getStudent,
                QuizSubmissionDTO::setStudent,
                facultyFeignClient::getStudent);
        return quizSubmissions;
    }

    public List<QuizSubmissionDTO> findByStudentId(Long id) {
        if (hasAuthority(ROLE_STUDENT) && !id.equals(getStudentId())) {
            throw new ForbiddenException("You are not allowed to view these subject enrollments c");
        }

        List<QuizSubmissionDTO> quizSubmissions =
                mapper.toDTO(repository.findByStudentIdAndDeletedFalseOrderBySubmissionTimestampDesc(id));
        return quizSubmissions.isEmpty()
                ? quizSubmissions
                : this.mapMissingValues(quizSubmissions);
    }


    public Page<QuizSubmissionDTO> findByStudentId(Long id, Pageable pageable, String search) {
        if (hasAuthority(ROLE_STUDENT) && !id.equals(getStudentId())) {
            throw new ForbiddenException("You are not allowed to view this Assessment Submissions");
        }

        Page<QuizSubmissionDTO> quizSubmissions =
                repository
                        .findByStudentIdContaining(id, pageable, "%" + search + "%")
                        .map(mapper::toDTO);

        return quizSubmissions.getContent().isEmpty()
                ? quizSubmissions
                : new PageImpl<>(
                this.mapMissingValues(quizSubmissions.getContent()),
                pageable,
                quizSubmissions.getTotalElements());
    }

    public Page<QuizSubmissionDTO> findByQuizId(Long id, Pageable pageable, String search) {
        if (hasAuthority(ROLE_TEACHER)) {
            List<QuizDTO> quizzes = quizService.findById(Set.of(id));
            if (quizzes.isEmpty()) {
                throw new NotFoundException("Quiz not found");
            }

            QuizDTO quiz = quizzes.get(0);
            Long teacherId = getTeacherId();
            if (!quiz.getBundle().getSubject().getProfessor().getId().equals(teacherId)
                    && !quiz.getBundle().getSubject().getAssistant().getId().equals(teacherId)) {
                throw new ForbiddenException(
                        "You are not allowed to view these subject enrollments d");
            }
        }

        Page<QuizSubmissionDTO> quizSubmissions =
                repository
                        .findByQuizIdContaining(id, pageable, "%" + search + "%")
                        .map(mapper::toDTO);

        return quizSubmissions.getContent().isEmpty()
                ? quizSubmissions
                : new PageImpl<>(
                this.mapMissingValues(quizSubmissions.getContent()),
                pageable,
                quizSubmissions.getTotalElements());
    }

    public List<QuizSubmissionDTO> findByQuizId(Long id) {
        if (hasAuthority(ROLE_TEACHER)) {
            List<QuizDTO> quizzes = quizService.findById(Set.of(id));
            if (quizzes.isEmpty()) {
                throw new NotFoundException("Quiz not found");
            }

            QuizDTO quiz = quizzes.get(0);
            Long teacherId = getTeacherId();
            if (!quiz.getBundle().getSubject().getProfessor().getId().equals(teacherId)
                    && !quiz.getBundle().getSubject().getAssistant().getId().equals(teacherId)) {
                throw new ForbiddenException(
                        "You are not allowed to view these subject enrollments d");
            }
        }
        List<QuizSubmissionDTO> quizSubmissions =
                mapper.toDTO(repository.findByQuizIdAndDeletedFalseOrderBySubmissionTimestampDesc(id));
        return quizSubmissions.isEmpty() ? quizSubmissions : this.mapMissingValues(quizSubmissions);
    }
}
