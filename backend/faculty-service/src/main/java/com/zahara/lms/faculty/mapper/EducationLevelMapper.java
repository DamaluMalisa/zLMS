package com.zahara.lms.faculty.mapper;

import com.zahara.lms.faculty.dto.EducationLevelDTO;
import com.zahara.lms.faculty.model.EducationLevel;
import com.zahara.lms.shared.mapper.BaseMapper;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface EducationLevelMapper extends BaseMapper<EducationLevel, EducationLevelDTO, Long> {
}
