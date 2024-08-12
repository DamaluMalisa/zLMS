package com.zahara.lms.assessment.mapper;

import com.zahara.lms.assessment.dto.FillInBlankQuestionDTO;
import com.zahara.lms.assessment.model.FillInBlankQuestion;
import com.zahara.lms.shared.mapper.BaseMapper;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface FillInBlankQuestionMapper extends BaseMapper<FillInBlankQuestion, FillInBlankQuestionDTO, Long> {
}
