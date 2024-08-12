package com.zahara.lms.exam.service;

import com.zahara.lms.exam.dto.ExamTypeDTO;
import com.zahara.lms.exam.mapper.ExamTypeMapper;
import com.zahara.lms.exam.model.ExamType;
import com.zahara.lms.exam.repository.ExamTypeRepository;
import com.zahara.lms.shared.service.BaseService;
import org.springframework.stereotype.Service;

@Service
public class ExamTypeService extends BaseService<ExamType, ExamTypeDTO, Long> {
    private final ExamTypeRepository repository;
    private final ExamTypeMapper mapper;

    public ExamTypeService(ExamTypeRepository repository, ExamTypeMapper mapper) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
    }
}
