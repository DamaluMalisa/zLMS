package com.zahara.lms.assessment.service;

import com.zahara.lms.assessment.dto.MultipleChoiceQuestionDTO;
import com.zahara.lms.assessment.mapper.MultipleChoiceQuestionMapper;
import com.zahara.lms.assessment.model.MultipleChoiceQuestion;
import com.zahara.lms.assessment.repository.MultipleChoiceQuestionRepository;
import com.zahara.lms.shared.service.BaseService;
import org.springframework.stereotype.Service;

@Service
public class MultipleChoiceQuestionService extends BaseService<MultipleChoiceQuestion, MultipleChoiceQuestionDTO, Long> {

    private final MultipleChoiceQuestionRepository repository;
    private final MultipleChoiceQuestionMapper mapper;

    public MultipleChoiceQuestionService(MultipleChoiceQuestionRepository repository, MultipleChoiceQuestionMapper mapper) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
    }
}
