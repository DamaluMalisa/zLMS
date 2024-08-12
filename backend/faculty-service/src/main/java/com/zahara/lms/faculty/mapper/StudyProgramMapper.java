package com.zahara.lms.faculty.mapper;

import com.zahara.lms.faculty.dto.FacultyDTO;
import com.zahara.lms.faculty.dto.StudyProgramDTO;
import com.zahara.lms.faculty.model.Faculty;
import com.zahara.lms.faculty.model.StudyProgram;
import com.zahara.lms.shared.mapper.BaseMapper;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface StudyProgramMapper extends BaseMapper<StudyProgram, StudyProgramDTO, Long> {
    @Mapping(target = "dean", ignore = true)
    @Mapping(target = "address", ignore = true)
    FacultyDTO toDTO(Faculty faculty);
}
