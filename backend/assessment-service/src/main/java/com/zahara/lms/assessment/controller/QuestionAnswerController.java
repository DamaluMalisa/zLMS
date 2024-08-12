package com.zahara.lms.assessment.controller;

import com.zahara.lms.assessment.dto.QuestionAnswerDTO;
import com.zahara.lms.assessment.model.QuestionAnswer;
import com.zahara.lms.assessment.service.QuestionAnswerService;
import com.zahara.lms.shared.controller.BaseController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/question-answers")
public class  QuestionAnswerController extends BaseController<QuestionAnswer, QuestionAnswerDTO, Long> {
    private final QuestionAnswerService service;

    public  QuestionAnswerController( QuestionAnswerService service) {
        super(service);
        this.service = service;
    }

    @PostMapping("/process-question-answer/{quizAttemptId}/{questionAssignmentId}")
    public ResponseEntity<QuestionAnswerDTO> submitAnswer(
            @PathVariable Long quizAttemptId,
            @PathVariable Long questionAssignmentId,
            @RequestBody String studentAnswer) {
        QuestionAnswerDTO questionAnswer = service.processQuestionAnswer(quizAttemptId, questionAssignmentId, studentAnswer);
        return ResponseEntity.ok(questionAnswer);
    }
}

