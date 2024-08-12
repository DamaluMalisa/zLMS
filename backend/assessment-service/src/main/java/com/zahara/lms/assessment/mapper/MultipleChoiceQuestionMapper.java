package com.zahara.lms.assessment.mapper;

import com.zahara.lms.assessment.dto.MultipleChoiceQuestionDTO;
import com.zahara.lms.assessment.model.MultipleChoiceQuestion;
import com.zahara.lms.shared.mapper.BaseMapper;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface  MultipleChoiceQuestionMapper extends BaseMapper<MultipleChoiceQuestion, MultipleChoiceQuestionDTO, Long> {
}
