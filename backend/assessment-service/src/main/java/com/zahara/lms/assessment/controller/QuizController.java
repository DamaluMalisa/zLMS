package com.zahara.lms.assessment.controller;

import com.zahara.lms.assessment.dto.QuizDTO;
import com.zahara.lms.assessment.model.Quiz;
import com.zahara.lms.assessment.service.QuizService;
import com.zahara.lms.shared.controller.BaseController;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/quizzes")
public class QuizController extends BaseController<Quiz, QuizDTO, Long> {
    private final QuizService service;

    public QuizController(QuizService service) {
        super(service);
        this.service = service;
    }

    @GetMapping("/bundle/{id}/all")
    public ResponseEntity<List<QuizDTO>> getByBundleId(@PathVariable Long id) {
        List<QuizDTO> quizzes = service.findByBundleId(id);
        return new ResponseEntity<>(quizzes, HttpStatus.OK);
    }

    @GetMapping("/bundle/{id}")
    public ResponseEntity<Page<QuizDTO>> getByBundleId(@PathVariable Long id, Pageable pageable, @RequestParam(defaultValue = "") String search) {
        Page<QuizDTO> quizzes = service.findByBundleId(id, pageable, search);
        return new ResponseEntity<>(quizzes, HttpStatus.OK);
    }

    @GetMapping("/subject/{id}/all")
    public ResponseEntity<List<QuizDTO>> getBySubjectId(@PathVariable Long id) {
        return new ResponseEntity<>(this.service.findBySubjectId(id), HttpStatus.OK);
    }

    @GetMapping("/subject/{id}")
    public ResponseEntity<Page<QuizDTO>> getBySubjectId(@PathVariable Long id, Pageable pageable, @RequestParam(defaultValue = "") String search) {
        return new ResponseEntity<>(this.service.findBySubjectId(id, pageable, search), HttpStatus.OK);
    }

    @PostMapping("/{quizId}/multiple-choice/{questionId}")
    public ResponseEntity<Void> addMultipleChoiceQuestionToQuiz(@PathVariable Long quizId, @PathVariable Long questionId, @RequestParam int order) {
        this.service.addMultipleChoiceQuestionToQuiz(quizId, questionId, order);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/{quizId}/true-or-false/{questionId}")
    public ResponseEntity<Void> addTrueOrFalseQuestionToQuiz(@PathVariable Long quizId, @PathVariable Long questionId, @RequestParam int order) {
        service.addTrueOrFalseQuestionToQuiz(quizId, questionId, order);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/{quizId}/fill-in-blank/{questionId}")
    public ResponseEntity<Void> addFillInBlankQuestionToQuiz(@PathVariable Long quizId, @PathVariable Long questionId, @RequestParam int order) {
        service.addFillInBlankQuestionToQuiz(quizId, questionId, order);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
