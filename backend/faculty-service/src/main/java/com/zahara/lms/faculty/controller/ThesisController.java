package com.zahara.lms.faculty.controller;

import com.zahara.lms.faculty.dto.ThesisDTO;
import com.zahara.lms.faculty.model.Thesis;
import com.zahara.lms.faculty.service.ThesisService;
import com.zahara.lms.shared.controller.BaseController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/theses")
public class ThesisController extends BaseController<Thesis, ThesisDTO, Long> {
    private final ThesisService service;

    public ThesisController(ThesisService service) {
        super(service);
        this.service = service;
    }

    @GetMapping("/student/{id}")
    public ResponseEntity<ThesisDTO> getByStudentId(@PathVariable Long id) {
        return new ResponseEntity<>(this.service.findByStudentId(id), HttpStatus.OK);
    }
}
