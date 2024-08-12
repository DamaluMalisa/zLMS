package com.zahara.lms.faculty.service;

import com.zahara.lms.faculty.dto.SecondaryAndOrAdvancedEducationDTO;
import com.zahara.lms.faculty.mapper.SecondaryAndOrAdvancedEducationMapper;
import com.zahara.lms.faculty.model.SecondaryAndOrAdvancedEducation;
import com.zahara.lms.faculty.repository.SecondaryAndOrAdvancedEducationRepository;
import com.zahara.lms.shared.service.BaseService;
import org.springframework.stereotype.Service;

@Service
public class SecondaryAndOrAdvancedEducationService extends BaseService<SecondaryAndOrAdvancedEducation, SecondaryAndOrAdvancedEducationDTO, Long> {
    private final SecondaryAndOrAdvancedEducationRepository repository;
    private final SecondaryAndOrAdvancedEducationMapper mapper;

    public SecondaryAndOrAdvancedEducationService(SecondaryAndOrAdvancedEducationRepository repository, SecondaryAndOrAdvancedEducationMapper mapper) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
    }
}
