package com.zahara.lms.subject.controller;

import com.zahara.lms.shared.controller.BaseController;
import com.zahara.lms.subject.dto.AssignmentSubmissionDTO;
import com.zahara.lms.subject.model.AssignmentSubmission;
import com.zahara.lms.subject.service.AssignmentSubmissionService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/assignment-submissions")
public class AssignmentSubmissionController
        extends BaseController<AssignmentSubmission, AssignmentSubmissionDTO, Long> {
    private final AssignmentSubmissionService service;

    public AssignmentSubmissionController(AssignmentSubmissionService service) {
        super(service);
        this.service = service;
    }

    @GetMapping("/student/{id}/all")
    public ResponseEntity<List<AssignmentSubmissionDTO>> getByStudentId(@PathVariable Long id) {
        return new ResponseEntity<>(service.findByStudentId(id), HttpStatus.OK);
    }

    @GetMapping("/student/{id}")
    public ResponseEntity<Page<AssignmentSubmissionDTO>> getByStudentId(
            @PathVariable Long id,
            Pageable pageable,
            @RequestParam(defaultValue = "") String search) {
        return new ResponseEntity<>(
                this.service.findByStudentId(id, pageable, search), HttpStatus.OK);
    }

    @GetMapping("/assignment/{id}/all")
    public ResponseEntity<List<AssignmentSubmissionDTO>> getByAssignmentId(@PathVariable Long id) {
        return new ResponseEntity<>(service.findByAssignmentId(id), HttpStatus.OK);
    }


    @GetMapping("/assignment/{id}")
    public ResponseEntity<Page<AssignmentSubmissionDTO>> getByAssignmentId(
            @PathVariable Long id,
            Pageable pageable,
            @RequestParam(defaultValue = "") String search) {
        return new ResponseEntity<>(
                this.service.findByAssignmentId(id, pageable, search), HttpStatus.OK);
    }

}
