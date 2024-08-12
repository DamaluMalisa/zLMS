package com.zahara.lms.subject.controller;

import com.zahara.lms.shared.controller.BaseController;
import com.zahara.lms.subject.dto.AssignmentGradeDTO;
import com.zahara.lms.subject.model.AssignmentGrade;
import com.zahara.lms.subject.service.AssignmentGradeService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/assignment-grades")
public class AssignmentGradeController
        extends BaseController<AssignmentGrade, AssignmentGradeDTO, Long> {
    private final AssignmentGradeService service;

    public AssignmentGradeController(AssignmentGradeService service) {
        super(service);
        this.service = service;
    }

    @GetMapping("/student/{id}/all")
    public ResponseEntity<List<AssignmentGradeDTO>> getByStudentId(@PathVariable Long id) {
        return new ResponseEntity<>(service.findByStudentId(id), HttpStatus.OK);
    }

    @GetMapping("/student/{id}")
    public ResponseEntity<Page<AssignmentGradeDTO>> getByStudentId(
            @PathVariable Long id,
            Pageable pageable,
            @RequestParam(defaultValue = "") String search) {
        return new ResponseEntity<>(
                this.service.findByStudentId(id, pageable, search), HttpStatus.OK);
    }

    @GetMapping("/assignment-submission/{id}/all")
    public ResponseEntity<List<AssignmentGradeDTO>> getByAssignmentSubmissionId(@PathVariable Long id) {
        return new ResponseEntity<>(service.findByAssignmentSubmissionId(id), HttpStatus.OK);
    }

    @GetMapping("/assignment/{id}/all")
    public ResponseEntity<List<AssignmentGradeDTO>> getByAssignmentId(@PathVariable Long id) {
        return new ResponseEntity<>(service.findByAssignmentId(id), HttpStatus.OK);
    }

    @GetMapping("/subject/{id}/all")
    public ResponseEntity<List<AssignmentGradeDTO>> getBySubjectId(@PathVariable Long id) {
        return new ResponseEntity<>(service.findBySubjectId(id), HttpStatus.OK);
    }



    @GetMapping("/assignment-submission/{id}")
    public ResponseEntity<Page<AssignmentGradeDTO>> getByAssignmentSubmissionId(
            @PathVariable Long id,
            Pageable pageable,
            @RequestParam(defaultValue = "") String search) {
        return new ResponseEntity<>(
                this.service.findByAssignmentSubmissionId(id, pageable, search), HttpStatus.OK);
    }

}
