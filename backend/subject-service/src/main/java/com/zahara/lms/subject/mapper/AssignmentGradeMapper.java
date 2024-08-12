package com.zahara.lms.subject.mapper;

import com.zahara.lms.shared.mapper.BaseMapper;
import com.zahara.lms.subject.dto.AssignmentGradeDTO;
import com.zahara.lms.subject.dto.StudentDTO;
import com.zahara.lms.subject.model.AssignmentGrade;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AssignmentGradeMapper extends BaseMapper<AssignmentGrade, AssignmentGradeDTO, Long> {
    @Mapping(source = "studentId", target = "student")
    AssignmentGradeDTO toDTO(AssignmentGrade assignmentGrade);

    @Mapping(source = "student.id", target = "studentId")
    AssignmentGrade toModel(AssignmentGradeDTO assignmentGradeDTO);

    StudentDTO studentDTOFromId(Long id);

}
