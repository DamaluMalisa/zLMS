package com.zahara.lms.exam.mapper;

import com.zahara.lms.exam.dto.ExamPeriodDTO;
import com.zahara.lms.exam.dto.FacultyDTO;
import com.zahara.lms.exam.model.ExamPeriod;
import com.zahara.lms.shared.mapper.BaseMapper;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ExamPeriodMapper extends BaseMapper<ExamPeriod, ExamPeriodDTO, Long> {
    @Mapping(source = "facultyId", target = "faculty")
    ExamPeriodDTO toDTO(ExamPeriod examPeriod);

    @Mapping(source = "faculty.id", target = "facultyId")
    ExamPeriod toModel(ExamPeriodDTO examPeriodDTO);

    FacultyDTO facultyDTOFromId(Long id);
}
