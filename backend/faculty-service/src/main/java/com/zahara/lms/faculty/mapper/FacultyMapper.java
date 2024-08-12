package com.zahara.lms.faculty.mapper;

import com.zahara.lms.faculty.dto.FacultyDTO;
import com.zahara.lms.faculty.model.Faculty;
import com.zahara.lms.shared.mapper.BaseMapper;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface FacultyMapper extends BaseMapper<Faculty, FacultyDTO, Long> {}
