package com.zahara.lms.faculty.controller;

import com.zahara.lms.faculty.dto.StudentInfoDTO;
import com.zahara.lms.faculty.model.StudentInfo;
import com.zahara.lms.faculty.service.StudentInfoService;
import com.zahara.lms.shared.controller.BaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/student-info")
public class StudentInfoController extends BaseController<StudentInfo, StudentInfoDTO, Long> {
    private final StudentInfoService service;

    public StudentInfoController(StudentInfoService service) {
        super(service);
        this.service = service;
    }
}
