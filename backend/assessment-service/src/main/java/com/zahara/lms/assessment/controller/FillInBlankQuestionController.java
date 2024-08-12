package com.zahara.lms.assessment.controller;

import com.zahara.lms.assessment.dto.FillInBlankQuestionDTO;
import com.zahara.lms.assessment.model.FillInBlankQuestion;
import com.zahara.lms.assessment.service.FillInBlankQuestionService;
import com.zahara.lms.shared.controller.BaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/fill-in-blank-questions")
public class  FillInBlankQuestionController extends BaseController<FillInBlankQuestion, FillInBlankQuestionDTO, Long> {
    private final  FillInBlankQuestionService service;

    public  FillInBlankQuestionController( FillInBlankQuestionService service) {
        super(service);
        this.service = service;
    }
}
