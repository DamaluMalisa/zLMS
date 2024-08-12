package com.zahara.lms.assessment.mapper;

import com.zahara.lms.assessment.dto.AnswerOptionDTO;
import com.zahara.lms.assessment.model.AnswerOption;
import com.zahara.lms.shared.mapper.BaseMapper;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface  AnswerOptionMapper extends BaseMapper<AnswerOption, AnswerOptionDTO, Long> {
}
