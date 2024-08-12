package com.zahara.lms.assessment.mapper;

import com.zahara.lms.assessment.dto.TrueOrFalseQuestionDTO;
import com.zahara.lms.assessment.model.TrueOrFalseQuestion;
import com.zahara.lms.shared.mapper.BaseMapper;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface TrueOrFalseQuestionMapper extends BaseMapper<TrueOrFalseQuestion, TrueOrFalseQuestionDTO, Long> {
}
