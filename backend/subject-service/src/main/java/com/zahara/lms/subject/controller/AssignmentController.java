package com.zahara.lms.subject.controller;

import com.zahara.lms.shared.controller.BaseController;
import com.zahara.lms.subject.dto.AssignmentDTO;
import com.zahara.lms.subject.model.Assignment;
import com.zahara.lms.subject.service.AssignmentService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/assignments")
public class AssignmentController
        extends BaseController<Assignment, AssignmentDTO, Long> {
    private final AssignmentService service;

    public AssignmentController(AssignmentService service) {
        super(service);
        this.service = service;
    }

    @GetMapping("/bundle/{id}/all")
    public ResponseEntity<List<AssignmentDTO>> getByBundleId(@PathVariable Long id) {
        return new ResponseEntity<>(this.service.findByBundleId(id), HttpStatus.OK);
    }

    @GetMapping("/bundle/{id}")
    public ResponseEntity<Page<AssignmentDTO>> getByBundleId(
            @PathVariable Long id,
            Pageable pageable,
            @RequestParam(defaultValue = "") String search) {
        return new ResponseEntity<>(
                this.service.findByBundleId(id, pageable, search), HttpStatus.OK);
    }

    @GetMapping("/subject/{id}/all")
    public ResponseEntity<List<AssignmentDTO>> getBySubjectId(@PathVariable Long id) {
        return new ResponseEntity<>(this.service.findBySubjectId(id), HttpStatus.OK);
    }

    @GetMapping("/subject/{id}")
    public ResponseEntity<Page<AssignmentDTO>> getBySubjectId(
            @PathVariable Long id,
            Pageable pageable,
            @RequestParam(defaultValue = "") String search) {
        return new ResponseEntity<>(
                this.service.findBySubjectId(id, pageable, search), HttpStatus.OK);
    }
}
