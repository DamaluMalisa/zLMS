package com.zahara.lms.faculty.service;

import com.zahara.lms.faculty.dto.EducationLevelDTO;
import com.zahara.lms.faculty.mapper.EducationLevelMapper;
import com.zahara.lms.faculty.model.EducationLevel;
import com.zahara.lms.faculty.repository.EducationLevelRepository;
import com.zahara.lms.shared.service.BaseService;
import org.springframework.stereotype.Service;

@Service
public class EducationLevelService extends BaseService<EducationLevel, EducationLevelDTO, Long> {
    private final EducationLevelRepository repository;
    private final EducationLevelMapper mapper;

    public EducationLevelService(EducationLevelRepository repository, EducationLevelMapper mapper) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
    }
}
