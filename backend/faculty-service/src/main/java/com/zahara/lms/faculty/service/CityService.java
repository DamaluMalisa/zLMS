package com.zahara.lms.faculty.service;

import com.zahara.lms.faculty.dto.CityDTO;
import com.zahara.lms.faculty.mapper.CityMapper;
import com.zahara.lms.faculty.model.City;
import com.zahara.lms.faculty.repository.CityRepository;
import com.zahara.lms.shared.service.BaseService;
import org.springframework.stereotype.Service;

@Service
public class CityService extends BaseService<City, CityDTO, Long> {
    private final CityRepository repository;
    private final CityMapper mapper;

    public CityService(CityRepository repository, CityMapper mapper) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
    }
}
