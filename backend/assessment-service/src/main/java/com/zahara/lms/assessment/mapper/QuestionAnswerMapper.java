package com.zahara.lms.assessment.mapper;

import com.zahara.lms.assessment.dto.QuestionAnswerDTO;
import com.zahara.lms.assessment.model.QuestionAnswer;
import com.zahara.lms.shared.mapper.BaseMapper;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface  QuestionAnswerMapper extends BaseMapper<QuestionAnswer, QuestionAnswerDTO, Long> {
}
