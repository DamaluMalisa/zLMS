package com.zahara.lms.assessment.service;

import com.zahara.lms.assessment.dto.FillInBlankQuestionDTO;
import com.zahara.lms.assessment.mapper.FillInBlankQuestionMapper;
import com.zahara.lms.assessment.model.FillInBlankQuestion;
import com.zahara.lms.assessment.repository.FillInBlankQuestionRepository;
import com.zahara.lms.shared.service.BaseService;
import org.springframework.stereotype.Service;

@Service
public class FillInBlankQuestionService extends BaseService<FillInBlankQuestion, FillInBlankQuestionDTO, Long> {

    private final FillInBlankQuestionRepository repository;
    private final FillInBlankQuestionMapper mapper;

    public FillInBlankQuestionService(FillInBlankQuestionRepository repository, FillInBlankQuestionMapper mapper) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
    }
}
