package com.zahara.lms.subject.controller;

import com.zahara.lms.shared.controller.BaseController;
import com.zahara.lms.subject.dto.PageDTO;
import com.zahara.lms.subject.model.Page;
import com.zahara.lms.subject.service.PageService;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pages")
public class PageController
        extends BaseController<Page, PageDTO, Long> {
    private final PageService service;

    public PageController(PageService service) {
        super(service);
        this.service = service;
    }

    @GetMapping("/bundle/{id}/all")
    public ResponseEntity<List<PageDTO>> getByBundleId(@PathVariable Long id) {
        return new ResponseEntity<>(this.service.findByBundleId(id), HttpStatus.OK);
    }

    @GetMapping("/bundle/{id}")
    public ResponseEntity<org.springframework.data.domain.Page<PageDTO>> getByBundleId(
            @PathVariable Long id,
            Pageable pageable,
            @RequestParam(defaultValue = "") String search) {
        return new ResponseEntity<>(
                this.service.findByBundleId(id, pageable, search), HttpStatus.OK);
    }

    @GetMapping("/subject/{id}/all")
    public ResponseEntity<List<PageDTO>> getBySubjectId(@PathVariable Long id) {
        return new ResponseEntity<>(this.service.findBySubjectId(id), HttpStatus.OK);
    }

    @GetMapping("/subject/{id}")
    public ResponseEntity<org.springframework.data.domain.Page<PageDTO>> getBySubjectId(
            @PathVariable Long id,
            Pageable pageable,
            @RequestParam(defaultValue = "") String search) {
        return new ResponseEntity<>(
                this.service.findBySubjectId(id, pageable, search), HttpStatus.OK);
    }
}
