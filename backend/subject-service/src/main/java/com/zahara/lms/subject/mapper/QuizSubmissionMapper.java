package com.zahara.lms.subject.mapper;

import com.zahara.lms.shared.mapper.BaseMapper;
import com.zahara.lms.subject.dto.QuizSubmissionDTO;
import com.zahara.lms.subject.dto.StudentDTO;
import com.zahara.lms.subject.model.QuizSubmission;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface QuizSubmissionMapper extends BaseMapper<QuizSubmission, QuizSubmissionDTO, Long> {
    @Mapping(source = "studentId", target = "student")
    QuizSubmissionDTO toDTO(QuizSubmission quizSubmission);

    @Mapping(source = "student.id", target = "studentId")
    QuizSubmission toModel(QuizSubmissionDTO quizSubmissionDTO);

    StudentDTO studentDTOFromId(Long id);

}

