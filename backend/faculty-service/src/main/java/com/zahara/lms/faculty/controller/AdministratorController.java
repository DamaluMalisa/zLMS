package com.zahara.lms.faculty.controller;

import com.zahara.lms.faculty.dto.AdministratorDTO;
import com.zahara.lms.faculty.model.Administrator;
import com.zahara.lms.faculty.service.AdministratorService;
import com.zahara.lms.shared.controller.BaseController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/administrators")
public class AdministratorController extends BaseController<Administrator, AdministratorDTO, Long> {
    private final AdministratorService service;

    public AdministratorController(AdministratorService service) {
        super(service);
        this.service = service;
    }

    @GetMapping("/user-id/{id}/id")
    public ResponseEntity<Long> getIdByUserId(@PathVariable Long id) {
        return new ResponseEntity<>(this.service.findByUserId(id).getId(), HttpStatus.OK);
    }
}
