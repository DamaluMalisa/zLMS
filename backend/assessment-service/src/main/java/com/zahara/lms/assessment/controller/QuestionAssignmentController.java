package com.zahara.lms.assessment.controller;

import com.zahara.lms.assessment.dto.QuestionAssignmentDTO;
import com.zahara.lms.assessment.service.QuestionAssignmentService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/question-assignments")
public class QuestionAssignmentController {
    private final QuestionAssignmentService service;

    public QuestionAssignmentController(QuestionAssignmentService service) {
        this.service = service;
    }

    @PostMapping("/quiz/{quizId}/multiple-choice/{questionId}")
    public ResponseEntity<QuestionAssignmentDTO> assignMultipleChoiceQuestionToQuiz(
            @PathVariable Long quizId,
            @PathVariable Long questionId,
            @RequestParam int order) {
        QuestionAssignmentDTO assignedQuestion = service.assignMultipleChoiceQuestionToQuiz(quizId, questionId, order);
        return new ResponseEntity<>(assignedQuestion, HttpStatus.OK);
    }

    @PostMapping("/quiz/{quizId}/true-or-false/{questionId}")
    public ResponseEntity<QuestionAssignmentDTO> assignTrueOrFalseQuestionToQuiz(
            @PathVariable Long quizId,
            @PathVariable Long questionId,
            @RequestParam int order) {
        QuestionAssignmentDTO assignedQuestion = service.assignTrueOrFalseQuestionToQuiz(quizId, questionId, order);
        return new ResponseEntity<>(assignedQuestion, HttpStatus.OK);
    }

    @PostMapping("/quiz/{quizId}/fill-in-blank/{questionId}")
    public ResponseEntity<QuestionAssignmentDTO> assignFillInBlankQuestionToQuiz(
            @PathVariable Long quizId,
            @PathVariable Long questionId,
            @RequestParam int order) {
        QuestionAssignmentDTO assignedQuestion = service.assignFillInBlankQuestionToQuiz(quizId, questionId, order);
        return new ResponseEntity<>(assignedQuestion, HttpStatus.OK);
    }

    @GetMapping("/quiz/{quizId}/all")
    public ResponseEntity<List<QuestionAssignmentDTO>> getByQuizId(@PathVariable Long quizId) {
        List<QuestionAssignmentDTO> questionAssignments = service.findByQuizId(quizId);
        return new ResponseEntity<>(questionAssignments, HttpStatus.OK);
    }

    @GetMapping("/quiz/{quizId}")
    public ResponseEntity<Page<QuestionAssignmentDTO>> getByQuizId(
            @PathVariable Long quizId,
            Pageable pageable,
            @RequestParam(defaultValue = "") String search) {
        Page<QuestionAssignmentDTO> questionAssignments = service.findByQuizId(quizId, pageable, search);
        return new ResponseEntity<>(questionAssignments, HttpStatus.OK);
    }
}
