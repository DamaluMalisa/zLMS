package com.zahara.lms.faculty.mapper;

import com.zahara.lms.faculty.dto.CountryDTO;
import com.zahara.lms.faculty.model.Country;
import com.zahara.lms.shared.mapper.BaseMapper;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CountryMapper extends BaseMapper<Country, CountryDTO, Long> {}
