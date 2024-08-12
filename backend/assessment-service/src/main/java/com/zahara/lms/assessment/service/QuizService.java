package com.zahara.lms.assessment.service;

import com.zahara.lms.assessment.client.SubjectFeignClient;
import com.zahara.lms.shared.exception.ForbiddenException;
import com.zahara.lms.shared.service.ExtendedService;
import com.zahara.lms.assessment.client.FacultyFeignClient;
import com.zahara.lms.assessment.dto.*;
import com.zahara.lms.assessment.dto.QuizDTO;
import com.zahara.lms.assessment.mapper.QuizMapper;
import com.zahara.lms.assessment.model.Quiz;
import com.zahara.lms.assessment.repository.QuizRepository;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.Set;

import static com.zahara.lms.shared.security.SecurityUtils.*;
import static com.zahara.lms.shared.security.SecurityUtils.getTeacherId;

@Service
public class QuizService extends ExtendedService<Quiz, QuizDTO, Long> {
    private final QuizRepository repository;
    private final QuizMapper mapper;
    private final SubjectFeignClient subjectFeignClient;
    private final FacultyFeignClient facultyFeignClient;
    private final QuestionAssignmentService questionAssignmentService;

    public QuizService(QuizRepository repository, QuizMapper mapper, SubjectFeignClient subjectFeignClient, FacultyFeignClient facultyFeignClient, QuestionAssignmentService questionAssignmentService) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
        this.subjectFeignClient = subjectFeignClient;
        this.facultyFeignClient = facultyFeignClient;
        this.questionAssignmentService = questionAssignmentService;
    }

    @Override
    @Transactional
    public QuizDTO save(QuizDTO quizDTO) {
        if (hasAuthority(ROLE_TEACHER)) {
            TeacherDTO teacher = facultyFeignClient.getTeacher(Set.of(getTeacherId())).get(0);
            SubjectDTO subject = quizDTO.getSubject();
            if (!subject.getProfessor().getId().equals(teacher.getId()) && !subject.getAssistant().getId().equals(teacher.getId())) {
                throw new ForbiddenException("You are not allowed manage this Quiz");
            }

            if (quizDTO.getTeacher() == null) {
                quizDTO.setTeacher(teacher);
            }
        }

        return super.save(quizDTO);
    }

    @Override
    @Transactional
    public void delete(Set<Long> ids) {
        if (hasAuthority(ROLE_TEACHER)) {
            Long teacherId = getTeacherId();
            List<Quiz> quizzes = (List<Quiz>) repository.findAllById(ids);

            boolean forbidden = quizzes.stream().anyMatch(quiz -> {
                SubjectDTO subject = subjectFeignClient.getSubject(Collections.singleton(quiz.getSubjectId())).get(0);
                return !subject.getProfessor().getId().equals(teacherId) && !subject.getAssistant().getId().equals(teacherId);
            });

            if (forbidden) {
                throw new ForbiddenException("You are not allowed to delete these Quizzes");
            }
        }

        super.delete(ids);
    }

    @Override
    protected List<QuizDTO> mapMissingValues(List<QuizDTO> quizzes) {
        map(quizzes, QuizDTO::getTeacher, QuizDTO::setTeacher, facultyFeignClient::getTeacher);
        map(quizzes, QuizDTO::getSubject, QuizDTO::setSubject, subjectFeignClient::getSubject);
//        map(quizzes, QuizDTO::getBundle, QuizDTO::setBundle, subjectFeignClient::getBundle);

        return quizzes;
    }

    public List<QuizDTO> findByBundleId(Long id) {
        List<QuizDTO> quizzes = mapper.toDTO(repository.findByBundleIdAndDeletedFalseOrderByTimestampDesc(id));
        return quizzes.isEmpty() ? quizzes : this.mapMissingValues(quizzes);
    }

    public Page<QuizDTO> findByBundleId(Long id, Pageable pageable, String search) {
        Page<QuizDTO> quizzes = repository.findByBundleIdContaining(id, pageable, "%" + search + "%").map(mapper::toDTO);
        return quizzes.getContent().isEmpty() ? quizzes : new PageImpl<>(this.mapMissingValues(quizzes.getContent()), pageable, quizzes.getTotalElements());
    }

    public List<QuizDTO> findBySubjectId(Long id) {
        List<QuizDTO> quizzes = mapper.toDTO(repository.findBySubjectIdAndDeletedFalseOrderByTimestampDesc(id));
        System.out.println("this is it 1 " + quizzes);
        System.out.println("this is not it 2 " + this.mapMissingValues(quizzes));
        return quizzes.isEmpty() ? quizzes : this.mapMissingValues(quizzes);
    }

    public Page<QuizDTO> findBySubjectId(Long id, Pageable pageable, String search) {
        Page<QuizDTO> quizzes = repository.findBySubjectIdContaining(id, pageable, "%" + search + "%").map(mapper::toDTO);
        return quizzes.getContent().isEmpty() ? quizzes : new PageImpl<>(this.mapMissingValues(quizzes.getContent()), pageable, quizzes.getTotalElements());
    }

    @Transactional
    public void addMultipleChoiceQuestionToQuiz(Long quizId, Long questionId, int order) {
        questionAssignmentService.assignMultipleChoiceQuestionToQuiz(quizId, questionId, order);
    }

    @Transactional
    public void addTrueOrFalseQuestionToQuiz(Long quizId, Long questionId, int order) {
        questionAssignmentService.assignTrueOrFalseQuestionToQuiz(quizId, questionId, order);
    }

    @Transactional
    public void addFillInBlankQuestionToQuiz(Long quizId, Long questionId, int order) {
        questionAssignmentService.assignFillInBlankQuestionToQuiz(quizId, questionId, order);
    }
}
