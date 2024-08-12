package com.zahara.lms.assessment.service;

import com.zahara.lms.assessment.dto.QuestionAnswerDTO;
import com.zahara.lms.assessment.mapper.QuestionAnswerMapper;
import com.zahara.lms.assessment.model.QuestionAnswer;
import com.zahara.lms.assessment.model.QuestionAssignment;
import com.zahara.lms.assessment.model.QuizAttempt;
import com.zahara.lms.assessment.repository.QuestionAnswerRepository;
import com.zahara.lms.assessment.repository.QuestionAssignmentRepository;
import com.zahara.lms.assessment.repository.QuizAttemptRepository;
import com.zahara.lms.shared.service.BaseService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class QuestionAnswerService extends BaseService<QuestionAnswer, QuestionAnswerDTO, Long> {

    private final QuestionAnswerRepository repository;
    private final QuizAttemptRepository quizAttemptRepository;
    private final QuestionAssignmentRepository questionAssignmentRepository;
    private final QuestionAnswerMapper mapper;

    public QuestionAnswerService(QuestionAnswerRepository repository, QuestionAnswerMapper mapper,
                                 QuizAttemptRepository quizAttemptRepository,
                                 QuestionAssignmentRepository questionAssignmentRepository) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
        this.quizAttemptRepository = quizAttemptRepository;
        this.questionAssignmentRepository = questionAssignmentRepository;
    }

    @Transactional
    public QuestionAnswerDTO processQuestionAnswer(Long quizAttemptId, Long questionAssignmentId, String studentAnswer) {
        QuizAttempt quizAttempt = quizAttemptRepository.findById(quizAttemptId)
                .orElseThrow(() -> new RuntimeException("QuizAttempt not found"));

        QuestionAssignment questionAssignment = questionAssignmentRepository.findById(questionAssignmentId)
                .orElseThrow(() -> new RuntimeException("QuestionAssignment not found"));

        QuestionAnswer questionAnswer = new QuestionAnswer();
        questionAnswer.setQuizAttempt(quizAttempt);
        questionAnswer.setStudentAnswer(studentAnswer);

        if (questionAssignment.getMultipleChoiceQuestion() != null) {
            questionAnswer.setMultipleChoiceQuestion(questionAssignment.getMultipleChoiceQuestion());
        } else if (questionAssignment.getTrueOrFalseQuestion() != null) {
            questionAnswer.setTrueOrFalseQuestion(questionAssignment.getTrueOrFalseQuestion());
        } else if (questionAssignment.getFillInBlankQuestion() != null) {
            questionAnswer.setFillInBlankQuestion(questionAssignment.getFillInBlankQuestion());
        }

        questionAnswer.setCorrect(isAnswerCorrect(questionAssignment, studentAnswer));

        if (questionAnswer.isCorrect()) {
            questionAnswer.setScore(getQuestionPoints(questionAssignment));
        } else {
            questionAnswer.setScore(0);
        }

        repository.save(questionAnswer);

        quizAttempt.getQuestionAnswers().add(questionAnswer);
        quizAttempt.setScore(quizAttempt.getQuestionAnswers().stream().mapToInt(QuestionAnswer::getScore).sum());

        return mapper.toDTO(questionAnswer);
    }

    private boolean isAnswerCorrect(QuestionAssignment questionAssignment, String studentAnswer) {
        if (questionAssignment.getMultipleChoiceQuestion() != null) {
            return questionAssignment.getMultipleChoiceQuestion().getCorrectAnswer()
                    .equalsIgnoreCase(studentAnswer);
        }
        if (questionAssignment.getTrueOrFalseQuestion() != null) {
            return questionAssignment.getTrueOrFalseQuestion().getCorrectAnswer()
                    .toString().equalsIgnoreCase(studentAnswer);
        }
        return questionAssignment.getFillInBlankQuestion() != null &&
                questionAssignment.getFillInBlankQuestion().getCorrectAnswer()
                        .equalsIgnoreCase(studentAnswer);
    }

    private int getQuestionPoints(QuestionAssignment questionAssignment) {
        if (questionAssignment.getMultipleChoiceQuestion() != null) {
            return questionAssignment.getMultipleChoiceQuestion().getPoints();
        } else if (questionAssignment.getTrueOrFalseQuestion() != null) {
            return questionAssignment.getTrueOrFalseQuestion().getPoints();
        } else if (questionAssignment.getFillInBlankQuestion() != null) {
            return questionAssignment.getFillInBlankQuestion().getPoints();
        }
        return 0;
    }
}
