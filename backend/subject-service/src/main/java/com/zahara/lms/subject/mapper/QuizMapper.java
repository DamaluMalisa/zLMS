package com.zahara.lms.subject.mapper;

import com.zahara.lms.shared.mapper.BaseMapper;
import com.zahara.lms.subject.dto.QuizDTO;
import com.zahara.lms.subject.dto.QuizDTO;
import com.zahara.lms.subject.dto.SubjectDTO;
import com.zahara.lms.subject.dto.TeacherDTO;
import com.zahara.lms.subject.model.Quiz;
import com.zahara.lms.subject.model.Quiz;
import com.zahara.lms.subject.model.Subject;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface QuizMapper extends BaseMapper<Quiz, QuizDTO, Long> {
    @Mapping(source = "teacherId", target = "teacher")
    QuizDTO toDTO(Quiz quiz);

    @Mapping(source = "teacher.id", target = "teacherId")
    Quiz toModel(QuizDTO quizDTO);

    TeacherDTO teacherDTOFromId(Long id);

}
