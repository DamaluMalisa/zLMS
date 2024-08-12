package com.zahara.lms.subject.mapper;

import com.zahara.lms.shared.mapper.BaseMapper;
import com.zahara.lms.subject.dto.PageDTO;
import com.zahara.lms.subject.dto.SubjectDTO;
import com.zahara.lms.subject.dto.TeacherDTO;
import com.zahara.lms.subject.model.Page;
import com.zahara.lms.subject.model.Subject;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface PageMapper extends BaseMapper<Page, PageDTO, Long> {
    @Mapping(source = "teacherId", target = "teacher")
    PageDTO toDTO(Page page);

    @Mapping(source = "teacher.id", target = "teacherId")
    Page toModel(PageDTO pageDTO);

    TeacherDTO teacherDTOFromId(Long id);
}
