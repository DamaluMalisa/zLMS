package com.zahara.lms.exam.mapper;

import com.zahara.lms.exam.dto.ExamTypeDTO;
import com.zahara.lms.exam.model.ExamType;
import com.zahara.lms.shared.mapper.BaseMapper;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ExamTypeMapper extends BaseMapper<ExamType, ExamTypeDTO, Long> {}
