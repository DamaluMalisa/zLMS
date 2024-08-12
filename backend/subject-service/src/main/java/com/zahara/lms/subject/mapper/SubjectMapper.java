package com.zahara.lms.subject.mapper;

import com.zahara.lms.shared.mapper.BaseMapper;
import com.zahara.lms.subject.dto.StudyProgramDTO;
import com.zahara.lms.subject.dto.SubjectDTO;
import com.zahara.lms.subject.dto.TeacherDTO;
import com.zahara.lms.subject.model.Subject;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface SubjectMapper extends BaseMapper<Subject, SubjectDTO, Long> {
    @Mapping(source = "studyProgramId", target = "studyProgram")
    @Mapping(source = "professorId", target = "professor")
    @Mapping(source = "assistantId", target = "assistant")
    SubjectDTO toDTO(Subject subject);

    @Mapping(source = "studyProgram.id", target = "studyProgramId")
    @Mapping(source = "professor.id", target = "professorId")
    @Mapping(source = "assistant.id", target = "assistantId")
    Subject toModel(SubjectDTO subjectDTO);

    StudyProgramDTO studyProgramDTOFromId(Long id);

    TeacherDTO teacherFromId(Long id);
}

