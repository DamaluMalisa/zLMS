package com.zahara.lms.assessment.controller;

import com.zahara.lms.assessment.dto.TrueOrFalseQuestionDTO;
import com.zahara.lms.assessment.model.TrueOrFalseQuestion;
import com.zahara.lms.assessment.service.TrueOrFalseQuestionService;
import com.zahara.lms.shared.controller.BaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/true-or-false-questions")
public class  TrueOrFalseQuestionController extends BaseController<TrueOrFalseQuestion, TrueOrFalseQuestionDTO, Long> {
    private final TrueOrFalseQuestionService service;

    public  TrueOrFalseQuestionController( TrueOrFalseQuestionService service) {
        super(service);
        this.service = service;
    }
}
