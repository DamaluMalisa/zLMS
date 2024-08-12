package com.zahara.lms.faculty.mapper;

import com.zahara.lms.faculty.dto.SecondaryAndOrAdvancedEducationDTO;
import com.zahara.lms.faculty.model.SecondaryAndOrAdvancedEducation;
import com.zahara.lms.shared.mapper.BaseMapper;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface SecondaryAndOrAdvancedEducationMapper extends BaseMapper<SecondaryAndOrAdvancedEducation, SecondaryAndOrAdvancedEducationDTO, Long> {}