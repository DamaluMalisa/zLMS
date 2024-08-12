package com.zahara.lms.subject.mapper;

import com.zahara.lms.shared.mapper.BaseMapper;
import com.zahara.lms.subject.dto.AssignmentSubmissionDTO;
import com.zahara.lms.subject.dto.StudentDTO;
import com.zahara.lms.subject.model.AssignmentSubmission;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AssignmentSubmissionMapper extends BaseMapper<AssignmentSubmission, AssignmentSubmissionDTO, Long> {

    @Mapping(source = "studentId", target = "student")
    AssignmentSubmissionDTO toDTO(AssignmentSubmission assignmentSubmission);

    @Mapping(source = "student.id", target = "studentId")
    AssignmentSubmission toModel(AssignmentSubmissionDTO subjectDTO);

    StudentDTO studentDTOFromId(Long id);

}

