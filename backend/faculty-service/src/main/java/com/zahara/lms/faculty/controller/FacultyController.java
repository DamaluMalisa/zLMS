package com.zahara.lms.faculty.controller;

import com.zahara.lms.faculty.dto.FacultyDTO;
import com.zahara.lms.faculty.model.Faculty;
import com.zahara.lms.faculty.service.FacultyService;
import com.zahara.lms.shared.controller.BaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/faculties")
public class FacultyController extends BaseController<Faculty, FacultyDTO, Long> {
    private final FacultyService service;

    public FacultyController(FacultyService service) {
        super(service);
        this.service = service;
    }
}
