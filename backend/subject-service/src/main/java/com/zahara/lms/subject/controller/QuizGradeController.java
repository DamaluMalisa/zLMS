package com.zahara.lms.subject.controller;

import com.zahara.lms.shared.controller.BaseController;
import com.zahara.lms.subject.dto.QuizGradeDTO;
import com.zahara.lms.subject.model.QuizGrade;
import com.zahara.lms.subject.service.QuizGradeService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quiz-grades")
public class QuizGradeController
        extends BaseController<QuizGrade, QuizGradeDTO, Long> {
    private final QuizGradeService service;

    public QuizGradeController(QuizGradeService service) {
        super(service);
        this.service = service;
    }

    @GetMapping("/student/{id}/all")
    public ResponseEntity<List<QuizGradeDTO>> getByStudentId(@PathVariable Long id) {
        return new ResponseEntity<>(service.findByStudentId(id), HttpStatus.OK);
    }

    @GetMapping("/student/{id}")
    public ResponseEntity<Page<QuizGradeDTO>> getByStudentId(
            @PathVariable Long id,
            Pageable pageable,
            @RequestParam(defaultValue = "") String search) {
        return new ResponseEntity<>(
                this.service.findByStudentId(id, pageable, search), HttpStatus.OK);
    }

    @GetMapping("/quiz-submission/{id}/all")
    public ResponseEntity<List<QuizGradeDTO>> getByQuizSubmissionId(@PathVariable Long id) {
        return new ResponseEntity<>(service.findByQuizSubmissionId(id), HttpStatus.OK);
    }


    @GetMapping("/quiz-submission/{id}")
    public ResponseEntity<Page<QuizGradeDTO>> getByQuizSubmissionId(
            @PathVariable Long id,
            Pageable pageable,
            @RequestParam(defaultValue = "") String search) {
        return new ResponseEntity<>(
                this.service.findByQuizSubmissionId(id, pageable, search), HttpStatus.OK);
    }

}
