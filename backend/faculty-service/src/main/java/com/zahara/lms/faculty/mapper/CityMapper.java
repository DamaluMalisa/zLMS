package com.zahara.lms.faculty.mapper;

import com.zahara.lms.faculty.dto.CityDTO;
import com.zahara.lms.faculty.model.City;
import com.zahara.lms.shared.mapper.BaseMapper;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CityMapper extends BaseMapper<City, CityDTO, Long> {}
