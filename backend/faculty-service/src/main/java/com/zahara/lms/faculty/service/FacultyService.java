package com.zahara.lms.faculty.service;

import com.zahara.lms.faculty.dto.FacultyDTO;
import com.zahara.lms.faculty.mapper.FacultyMapper;
import com.zahara.lms.faculty.model.Faculty;
import com.zahara.lms.faculty.repository.FacultyRepository;
import com.zahara.lms.shared.service.BaseService;
import org.springframework.stereotype.Service;

@Service
public class FacultyService extends BaseService<Faculty, FacultyDTO, Long> {
    private final FacultyRepository repository;
    private final FacultyMapper mapper;

    public FacultyService(FacultyRepository repository, FacultyMapper mapper) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
    }
}
