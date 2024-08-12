package com.zahara.lms.faculty.mapper;

import com.zahara.lms.faculty.dto.AddressDTO;
import com.zahara.lms.faculty.model.Address;
import com.zahara.lms.shared.mapper.BaseMapper;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AddressMapper extends BaseMapper<Address, AddressDTO, Long> {}
