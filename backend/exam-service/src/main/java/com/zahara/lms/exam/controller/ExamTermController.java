package com.zahara.lms.exam.controller;

import com.zahara.lms.exam.dto.ExamTermDTO;
import com.zahara.lms.exam.model.ExamTerm;
import com.zahara.lms.exam.service.ExamTermService;
import com.zahara.lms.shared.controller.BaseController;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/exam-terms")
public class ExamTermController extends BaseController<ExamTerm, ExamTermDTO, Long> {
    private final ExamTermService service;

    public ExamTermController(ExamTermService service) {
        super(service);
        this.service = service;
    }

    @GetMapping("/subject/{id}/all")
    public ResponseEntity<List<ExamTermDTO>> getBySubjectId(@PathVariable Long id) {
        return new ResponseEntity<>(service.findBySubjectId(id), HttpStatus.OK);
    }

    @GetMapping("/teacher/{id}/all")
    public ResponseEntity<List<ExamTermDTO>> getByTeacherId(@PathVariable Long id) {
        return new ResponseEntity<>(service.findByTeacherId(id), HttpStatus.OK);
    }

    @GetMapping("/student/{id}")
    public ResponseEntity<Page<ExamTermDTO>> getByStudentId(
            @PathVariable Long id,
            Pageable pageable,
            @RequestParam(defaultValue = "") String search) {
        return new ResponseEntity<>(service.findByStudentId(id, pageable, search), HttpStatus.OK);
    }
}
