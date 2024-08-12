package com.zahara.lms.assessment.mapper;

import com.zahara.lms.assessment.dto.*;
import com.zahara.lms.assessment.model.QuizAttempt;
import com.zahara.lms.shared.mapper.BaseMapper;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;


@Mapper(componentModel = "spring")
public interface QuizAttemptMapper extends BaseMapper<QuizAttempt, QuizAttemptDTO, Long> {
    @Mapping(source = "studentId", target = "student")
    QuizAttemptDTO toDTO(QuizAttempt quizAttempt);

    @Mapping(source = "student.id", target = "studentId")
    QuizAttempt toModel(QuizAttemptDTO quizAttemptDTO);

    StudentDTO studentDTOFromId(Long id);

}
