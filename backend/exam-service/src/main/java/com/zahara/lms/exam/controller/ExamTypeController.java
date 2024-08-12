package com.zahara.lms.exam.controller;

import com.zahara.lms.exam.dto.ExamTypeDTO;
import com.zahara.lms.exam.model.ExamType;
import com.zahara.lms.exam.service.ExamTypeService;
import com.zahara.lms.shared.controller.BaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/exam-types")
public class ExamTypeController extends BaseController<ExamType, ExamTypeDTO, Long> {
    private final ExamTypeService service;

    public ExamTypeController(ExamTypeService service) {
        super(service);
        this.service = service;
    }
}
