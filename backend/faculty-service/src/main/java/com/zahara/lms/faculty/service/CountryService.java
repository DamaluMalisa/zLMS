package com.zahara.lms.faculty.service;

import com.zahara.lms.faculty.dto.CountryDTO;
import com.zahara.lms.faculty.mapper.CountryMapper;
import com.zahara.lms.faculty.model.Country;
import com.zahara.lms.faculty.repository.CountryRepository;
import com.zahara.lms.shared.service.BaseService;
import org.springframework.stereotype.Service;

@Service
public class CountryService extends BaseService<Country, CountryDTO, Long> {
    private final CountryRepository repository;
    private final CountryMapper mapper;

    public CountryService(CountryRepository repository, CountryMapper mapper) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
    }
}
