package com.zahara.lms.subject.mapper;

import com.zahara.lms.shared.mapper.BaseMapper;
import com.zahara.lms.subject.dto.SubjectAnnouncementDTO;
import com.zahara.lms.subject.dto.SubjectDTO;
import com.zahara.lms.subject.dto.TeacherDTO;
import com.zahara.lms.subject.model.Subject;
import com.zahara.lms.subject.model.SubjectAnnouncement;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface SubjectAnnouncementMapper
        extends BaseMapper<SubjectAnnouncement, SubjectAnnouncementDTO, Long> {
    @Mapping(source = "teacherId", target = "teacher")
    SubjectAnnouncementDTO toDTO(SubjectAnnouncement subjectAnnouncement);

    @Mapping(source = "teacher.id", target = "teacherId")
    SubjectAnnouncement toModel(SubjectAnnouncementDTO subjectAnnouncementDTO);

    TeacherDTO teacherDTOFromId(Long id);

    @Mapping(target = "studyProgram", ignore = true)
    @Mapping(target = "professor", ignore = true)
    @Mapping(target = "assistant", ignore = true)
    SubjectDTO toDTO(Subject subject);
}
