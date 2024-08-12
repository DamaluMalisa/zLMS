package com.zahara.lms.subject.controller;

import com.zahara.lms.shared.controller.BaseController;
import com.zahara.lms.subject.dto.QuizSubmissionDTO;
import com.zahara.lms.subject.model.QuizSubmission;
import com.zahara.lms.subject.service.QuizSubmissionService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quiz-submission")
public class QuizSubmissionController
        extends BaseController<QuizSubmission, QuizSubmissionDTO, Long> {
    private final QuizSubmissionService service;

    public QuizSubmissionController(QuizSubmissionService service) {
        super(service);
        this.service = service;
    }

    @GetMapping("/student/{id}/all")
    public ResponseEntity<List<QuizSubmissionDTO>> getByStudentId(@PathVariable Long id) {
        return new ResponseEntity<>(service.findByStudentId(id), HttpStatus.OK);
    }

    @GetMapping("/student/{id}")
    public ResponseEntity<Page<QuizSubmissionDTO>> getByStudentId(
            @PathVariable Long id,
            Pageable pageable,
            @RequestParam(defaultValue = "") String search) {
        return new ResponseEntity<>(
                this.service.findByStudentId(id, pageable, search), HttpStatus.OK);
    }

    @GetMapping("/quiz/{id}/all")
    public ResponseEntity<List<QuizSubmissionDTO>> getByQuizId(@PathVariable Long id) {
        return new ResponseEntity<>(service.findByQuizId(id), HttpStatus.OK);
    }


    @GetMapping("/quiz/{id}")
    public ResponseEntity<Page<QuizSubmissionDTO>> getByQuizId(
            @PathVariable Long id,
            Pageable pageable,
            @RequestParam(defaultValue = "") String search) {
        return new ResponseEntity<>(
                this.service.findByQuizId(id, pageable, search), HttpStatus.OK);
    }

}
