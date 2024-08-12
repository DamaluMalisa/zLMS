
package com.zahara.lms.assessment.service;

import com.zahara.lms.assessment.dto.AnswerOptionDTO;
import com.zahara.lms.assessment.mapper.AnswerOptionMapper;
import com.zahara.lms.assessment.model.AnswerOption;
import com.zahara.lms.assessment.repository.AnswerOptionRepository;
import com.zahara.lms.shared.service.BaseService;
import org.springframework.stereotype.Service;

@Service
public class AnswerOptionService extends BaseService<AnswerOption, AnswerOptionDTO, Long> {

    private final AnswerOptionRepository repository;
    private final AnswerOptionMapper mapper;

    public AnswerOptionService(AnswerOptionRepository repository, AnswerOptionMapper mapper) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
    }
}
