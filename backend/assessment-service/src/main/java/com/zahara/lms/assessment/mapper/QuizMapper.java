package com.zahara.lms.assessment.mapper;


import com.zahara.lms.assessment.dto.BundleDTO;
import com.zahara.lms.assessment.dto.QuizDTO;
import com.zahara.lms.assessment.dto.SubjectDTO;
import com.zahara.lms.assessment.dto.TeacherDTO;
import com.zahara.lms.assessment.model.Quiz;
import com.zahara.lms.shared.mapper.BaseMapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface QuizMapper extends BaseMapper<Quiz, QuizDTO, Long> {
    @Mapping(source = "teacherId", target = "teacher")
    @Mapping(source = "subjectId", target = "subject")
    @Mapping(source = "bundleId", target = "bundle")
    QuizDTO toDTO(Quiz quiz);

    @Mapping(source = "teacher.id", target = "teacherId")
    @Mapping(source = "subject.id", target = "subjectId")
    @Mapping(source = "bundle.id", target = "bundleId")
    Quiz toModel(QuizDTO quizDTO);

    TeacherDTO teacherDTOFromId(Long id);
    SubjectDTO subjectDTOFromId(Long id);
    BundleDTO bundleDTOFromId(Long id);

}
