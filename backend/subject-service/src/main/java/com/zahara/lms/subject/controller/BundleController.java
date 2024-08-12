package com.zahara.lms.subject.controller;

import com.zahara.lms.shared.controller.BaseController;
import com.zahara.lms.subject.dto.BundleDTO;
import com.zahara.lms.subject.model.Bundle;
import com.zahara.lms.subject.service.BundleService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bundles")
public class BundleController
        extends BaseController<Bundle, BundleDTO, Long> {
    private final BundleService service;

    public BundleController(BundleService service) {
        super(service);
        this.service = service;
    }

    @GetMapping("/subject/{id}/all")
    public ResponseEntity<List<BundleDTO>> getBySubjectId(@PathVariable Long id) {
        return new ResponseEntity<>(this.service.findBySubjectId(id), HttpStatus.OK);
    }

    @GetMapping("/subject/{id}")
    public ResponseEntity<Page<BundleDTO>> getBySubjectId(
            @PathVariable Long id,
            Pageable pageable,
            @RequestParam(defaultValue = "") String search) {
        return new ResponseEntity<>(
                this.service.findBySubjectId(id, pageable, search), HttpStatus.OK);
    }

    @GetMapping("/teacher/{id}/all")
    public ResponseEntity<List<BundleDTO>> getByTeacherId(@PathVariable Long id) {
        return new ResponseEntity<>(this.service.findByTeacherId(id), HttpStatus.OK);
    }
}
