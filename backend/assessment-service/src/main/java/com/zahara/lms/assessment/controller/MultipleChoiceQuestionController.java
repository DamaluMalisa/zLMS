
package com.zahara.lms.assessment.controller;

import com.zahara.lms.assessment.dto.MultipleChoiceQuestionDTO;
import com.zahara.lms.assessment.model.MultipleChoiceQuestion;
import com.zahara.lms.assessment.service.MultipleChoiceQuestionService;
import com.zahara.lms.shared.controller.BaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/multiple-choice-questions")
public class  MultipleChoiceQuestionController extends BaseController<MultipleChoiceQuestion, MultipleChoiceQuestionDTO, Long> {
    private final MultipleChoiceQuestionService service;

    public  MultipleChoiceQuestionController( MultipleChoiceQuestionService service) {
        super(service);
        this.service = service;
    }
}
