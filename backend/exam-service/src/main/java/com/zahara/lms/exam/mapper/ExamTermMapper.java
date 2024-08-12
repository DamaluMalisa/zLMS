package com.zahara.lms.exam.mapper;

import com.zahara.lms.exam.dto.ExamDTO;
import com.zahara.lms.exam.dto.ExamPeriodDTO;
import com.zahara.lms.exam.dto.ExamTermDTO;
import com.zahara.lms.exam.dto.SubjectDTO;
import com.zahara.lms.exam.model.Exam;
import com.zahara.lms.exam.model.ExamPeriod;
import com.zahara.lms.exam.model.ExamTerm;
import com.zahara.lms.shared.mapper.BaseMapper;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ExamTermMapper extends BaseMapper<ExamTerm, ExamTermDTO, Long> {
    @Mapping(source = "subjectId", target = "subject")
    @Mapping(target = "examType", ignore = true)
    ExamDTO toDTO(Exam exam);

    @Mapping(source = "subject.id", target = "subjectId")
    Exam toModel(ExamDTO examDTO);

    SubjectDTO subjectDTOFromId(Long id);

    @Mapping(target = "faculty", ignore = true)
    ExamPeriodDTO toDTO(ExamPeriod examPeriod);
}
