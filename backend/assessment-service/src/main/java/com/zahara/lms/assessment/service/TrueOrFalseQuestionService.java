package com.zahara.lms.assessment.service;

import com.zahara.lms.assessment.dto.TrueOrFalseQuestionDTO;
import com.zahara.lms.assessment.mapper.TrueOrFalseQuestionMapper;
import com.zahara.lms.assessment.model.TrueOrFalseQuestion;
import com.zahara.lms.assessment.repository.TrueOrFalseQuestionRepository;
import com.zahara.lms.shared.service.BaseService;
import org.springframework.stereotype.Service;

@Service
public class TrueOrFalseQuestionService extends BaseService<TrueOrFalseQuestion, TrueOrFalseQuestionDTO, Long> {

    private final TrueOrFalseQuestionRepository repository;
    private final TrueOrFalseQuestionMapper mapper;

    public TrueOrFalseQuestionService(TrueOrFalseQuestionRepository repository, TrueOrFalseQuestionMapper mapper) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
    }
}
