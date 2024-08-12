package com.zahara.lms.faculty.controller;

import com.zahara.lms.faculty.dto.EducationLevelDTO;
import com.zahara.lms.faculty.model.EducationLevel;
import com.zahara.lms.faculty.service.EducationLevelService;
import com.zahara.lms.shared.controller.BaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/education-level")
public class EducationLevelController extends BaseController<EducationLevel, EducationLevelDTO, Long> {
    private final EducationLevelService service;

    public EducationLevelController(EducationLevelService service) {
        super(service);
        this.service = service;
    }
}
