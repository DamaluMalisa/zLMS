package com.zahara.lms.faculty.mapper;

import com.zahara.lms.faculty.dto.StudentDTO;
import com.zahara.lms.faculty.dto.ThesisDTO;
import com.zahara.lms.faculty.model.Student;
import com.zahara.lms.faculty.model.Thesis;
import com.zahara.lms.shared.mapper.BaseMapper;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ThesisMapper extends BaseMapper<Thesis, ThesisDTO, Long> {
    @Mapping(target = "thesis", ignore = true)
    @Mapping(target = "studyProgram", ignore = true)
    StudentDTO toDTO(Student student);
}
