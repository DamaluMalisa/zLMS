package com.zahara.lms.faculty.service;

import com.zahara.lms.faculty.dto.AddressDTO;
import com.zahara.lms.faculty.mapper.AddressMapper;
import com.zahara.lms.faculty.model.Address;
import com.zahara.lms.faculty.repository.AddressRepository;
import com.zahara.lms.shared.service.BaseService;
import org.springframework.stereotype.Service;

@Service
public class AddressService extends BaseService<Address, AddressDTO, Long> {
    private final AddressRepository repository;
    private final AddressMapper mapper;

    public AddressService(AddressRepository repository, AddressMapper mapper) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
    }
}
