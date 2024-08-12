package com.zahara.lms.exam.controller;

import com.zahara.lms.exam.dto.ExamDTO;
import com.zahara.lms.exam.model.Exam;
import com.zahara.lms.exam.service.ExamService;
import com.zahara.lms.shared.controller.BaseController;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/exams")
public class ExamController extends BaseController<Exam, ExamDTO, Long> {
    private final ExamService service;

    public ExamController(ExamService service) {
        super(service);
        this.service = service;
    }

    @GetMapping("/subject/{id}/all")
    public ResponseEntity<List<ExamDTO>> getBySubjectId(@PathVariable Long id) {
        return new ResponseEntity<>(service.findBySubjectId(id), HttpStatus.OK);
    }

    @GetMapping("/subject/{id}")
    public ResponseEntity<Page<ExamDTO>> getBySubjectId(@PathVariable Long id, Pageable pageable, @RequestParam(defaultValue = "") String search) {
        return new ResponseEntity<>(service.findBySubjectId(id, pageable, search), HttpStatus.OK);
    }
}
