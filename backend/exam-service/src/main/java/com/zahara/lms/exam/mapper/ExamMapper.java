package com.zahara.lms.exam.mapper;

import com.zahara.lms.exam.dto.ExamDTO;
import com.zahara.lms.exam.dto.SubjectDTO;
import com.zahara.lms.exam.model.Exam;
import com.zahara.lms.shared.mapper.BaseMapper;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ExamMapper extends BaseMapper<Exam, ExamDTO, Long> {
    @Mapping(source = "subjectId", target = "subject")
    ExamDTO toDTO(Exam exam);

    @Mapping(source = "subject.id", target = "subjectId")
    Exam toModel(ExamDTO examDTO);

    SubjectDTO subjectDTOFromId(Long id);
}
