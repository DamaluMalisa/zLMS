package com.zahara.lms.exam.controller;

import com.zahara.lms.exam.dto.ExamPeriodDTO;
import com.zahara.lms.exam.model.ExamPeriod;
import com.zahara.lms.exam.service.ExamPeriodService;
import com.zahara.lms.shared.controller.BaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/exam-periods")
public class ExamPeriodController extends BaseController<ExamPeriod, ExamPeriodDTO, Long> {
    private final ExamPeriodService service;

    public ExamPeriodController(ExamPeriodService service) {
        super(service);
        this.service = service;
    }
}
