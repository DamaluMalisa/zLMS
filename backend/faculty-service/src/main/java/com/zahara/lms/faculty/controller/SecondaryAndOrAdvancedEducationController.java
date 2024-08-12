package com.zahara.lms.faculty.controller;

import com.zahara.lms.faculty.dto.SecondaryAndOrAdvancedEducationDTO;
import com.zahara.lms.faculty.model.SecondaryAndOrAdvancedEducation;
import com.zahara.lms.faculty.service.SecondaryAndOrAdvancedEducationService;
import com.zahara.lms.shared.controller.BaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/secondary-and-or-advanced-education")
public class SecondaryAndOrAdvancedEducationController extends BaseController<SecondaryAndOrAdvancedEducation, SecondaryAndOrAdvancedEducationDTO, Long> {
    private final SecondaryAndOrAdvancedEducationService service;
    public SecondaryAndOrAdvancedEducationController(SecondaryAndOrAdvancedEducationService service) {
        super(service);
        this.service = service;
    }
}
