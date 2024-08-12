package com.zahara.lms.subject.mapper;

import com.zahara.lms.shared.mapper.BaseMapper;
import com.zahara.lms.subject.dto.BundleDTO;
import com.zahara.lms.subject.dto.SubjectDTO;
import com.zahara.lms.subject.dto.TeacherDTO;
import com.zahara.lms.subject.model.Bundle;
import com.zahara.lms.subject.model.Subject;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface BundleMapper extends BaseMapper<Bundle, BundleDTO, Long> {
    @Mapping(source = "teacherId", target = "teacher")
    BundleDTO toDTO(Bundle bundle);

    @Mapping(source = "teacher.id", target = "teacherId")
    Bundle toModel(BundleDTO bundleDTO);

    TeacherDTO teacherDTOFromId(Long id);

}
