package com.zahara.lms.subject.mapper;

import com.zahara.lms.shared.mapper.BaseMapper;
import com.zahara.lms.subject.dto.QuizGradeDTO;
import com.zahara.lms.subject.dto.StudentDTO;
import com.zahara.lms.subject.model.QuizGrade;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface QuizGradeMapper extends BaseMapper<QuizGrade, QuizGradeDTO, Long> {
    @Mapping(source = "studentId", target = "student")
    QuizGradeDTO toDTO(QuizGrade quizGrade);

    @Mapping(source = "student.id", target = "studentId")
    QuizGrade toModel(QuizGradeDTO quizGradeDTO);

    StudentDTO studentDTOFromId(Long id);

}
