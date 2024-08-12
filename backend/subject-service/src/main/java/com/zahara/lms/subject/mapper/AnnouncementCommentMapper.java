package com.zahara.lms.subject.mapper;

import com.zahara.lms.shared.mapper.BaseMapper;
import com.zahara.lms.subject.dto.AnnouncementCommentDTO;
import com.zahara.lms.subject.dto.StudentDTO;
import com.zahara.lms.subject.model.AnnouncementComment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AnnouncementCommentMapper  extends BaseMapper<AnnouncementComment, AnnouncementCommentDTO, Long> {
    @Mapping(source = "studentId", target = "student")
    AnnouncementCommentDTO toDTO(AnnouncementComment announcementComment);
    @Mapping(source = "student.id", target = "studentId")
    AnnouncementComment toModel(AnnouncementCommentDTO announcementCommentDTO);

    StudentDTO studentDTOFromId(Long id);

}
