package com.zahara.lms.assessment.service;

import com.zahara.lms.assessment.dto.QuestionAssignmentDTO;
import com.zahara.lms.assessment.mapper.QuestionAssignmentMapper;
import com.zahara.lms.assessment.model.*;
import com.zahara.lms.assessment.repository.*;
import com.zahara.lms.shared.service.BaseService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class QuestionAssignmentService extends BaseService<QuestionAssignment, QuestionAssignmentDTO, Long> {
    private final QuestionAssignmentRepository repository;
    private final QuestionAssignmentMapper mapper;
    private final QuizRepository quizRepository;
    private final MultipleChoiceQuestionRepository multipleChoiceQuestionRepository;
    private final TrueOrFalseQuestionRepository trueOrFalseQuestionRepository;
    private final FillInBlankQuestionRepository fillInBlankQuestionRepository;

    public QuestionAssignmentService(QuestionAssignmentRepository repository, QuestionAssignmentMapper mapper, QuizRepository quizRepository, MultipleChoiceQuestionRepository multipleChoiceQuestionRepository, TrueOrFalseQuestionRepository trueOrFalseQuestionRepository, FillInBlankQuestionRepository fillInBlankQuestionRepository) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
        this.quizRepository = quizRepository;
        this.multipleChoiceQuestionRepository = multipleChoiceQuestionRepository;
        this.trueOrFalseQuestionRepository = trueOrFalseQuestionRepository;
        this.fillInBlankQuestionRepository = fillInBlankQuestionRepository;
    }

    @Transactional
    public QuestionAssignmentDTO assignMultipleChoiceQuestionToQuiz(Long quizId, Long questionId, int order) {
        Quiz quiz = quizRepository.findById(quizId).orElseThrow(() -> new RuntimeException("Quiz not found"));
        MultipleChoiceQuestion question = multipleChoiceQuestionRepository.findById(questionId).orElseThrow(() -> new RuntimeException("Question not found"));

        QuestionAssignment questionAssignment = new QuestionAssignment();
        questionAssignment.setQuiz(quiz);
        questionAssignment.setMultipleChoiceQuestion(question);
        questionAssignment.setOrder(order);

        QuestionAssignment savedAssignment = repository.save(questionAssignment);
        updateQuizTotalPoints(quiz);
        return mapper.toDTO(savedAssignment);
    }

    @Transactional
    public QuestionAssignmentDTO assignTrueOrFalseQuestionToQuiz(Long quizId, Long questionId, int order) {
        Quiz quiz = quizRepository.findById(quizId).orElseThrow(() -> new RuntimeException("Quiz not found"));
        TrueOrFalseQuestion question = trueOrFalseQuestionRepository.findById(questionId).orElseThrow(() -> new RuntimeException("Question not found"));

        QuestionAssignment questionAssignment = new QuestionAssignment();
        questionAssignment.setQuiz(quiz);
        questionAssignment.setTrueOrFalseQuestion(question);
        questionAssignment.setOrder(order);

        QuestionAssignment savedAssignment = repository.save(questionAssignment);
        updateQuizTotalPoints(quiz);
        return mapper.toDTO(savedAssignment);
    }

    @Transactional
    public QuestionAssignmentDTO assignFillInBlankQuestionToQuiz(Long quizId, Long questionId, int order) {
        Quiz quiz = quizRepository.findById(quizId).orElseThrow(() -> new RuntimeException("Quiz not found"));
        FillInBlankQuestion question = fillInBlankQuestionRepository.findById(questionId).orElseThrow(() -> new RuntimeException("Question not found"));

        QuestionAssignment questionAssignment = new QuestionAssignment();
        questionAssignment.setQuiz(quiz);
        questionAssignment.setFillInBlankQuestion(question);
        questionAssignment.setOrder(order);

        QuestionAssignment savedAssignment = repository.save(questionAssignment);
        updateQuizTotalPoints(quiz);
        return mapper.toDTO(savedAssignment);
    }

    public List<QuestionAssignmentDTO> findByQuizId(Long id) {
        return mapper.toDTO(repository.findByQuizIdAndDeletedFalse(id));
    }

    private void updateQuizTotalPoints(Quiz quiz) {
        double totalPoints = 0;
        for (QuestionAssignment assignment : quiz.getQuestionAssignments()) {
            if (assignment.getMultipleChoiceQuestion() != null) {
                totalPoints += assignment.getMultipleChoiceQuestion().getPoints();
            } else if (assignment.getTrueOrFalseQuestion() != null) {
                totalPoints += assignment.getTrueOrFalseQuestion().getPoints();
            } else if (assignment.getFillInBlankQuestion() != null) {
                totalPoints += assignment.getFillInBlankQuestion().getPoints();
            }
        }
        quiz.setTotalPoints(totalPoints);
        quizRepository.save(quiz);
    }


    public Page<QuestionAssignmentDTO> findByQuizId(Long id, Pageable pageable, String search) {
        Page<QuestionAssignmentDTO> questionAssignments = repository.findByQuizIdContaining(id, pageable, "%" + search + "%").map(mapper::toDTO);
        return new PageImpl<>(questionAssignments.getContent(), pageable, questionAssignments.getTotalElements());
    }
}
