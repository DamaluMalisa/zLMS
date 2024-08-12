package com.zahara.lms.assessment.mapper;

import com.zahara.lms.assessment.dto.QuestionAssignmentDTO;
import com.zahara.lms.assessment.model.QuestionAssignment;
import com.zahara.lms.shared.mapper.BaseMapper;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface QuestionAssignmentMapper extends BaseMapper<QuestionAssignment, QuestionAssignmentDTO, Long> {
}
