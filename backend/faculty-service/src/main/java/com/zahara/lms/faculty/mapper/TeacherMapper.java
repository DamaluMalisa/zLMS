package com.zahara.lms.faculty.mapper;

import com.zahara.lms.faculty.dto.TeacherDTO;
import com.zahara.lms.faculty.model.Teacher;
import com.zahara.lms.shared.dto.UserDTO;
import com.zahara.lms.shared.mapper.BaseMapper;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface TeacherMapper extends BaseMapper<Teacher, TeacherDTO, Long> {
    @Mapping(source = "userId", target = "user")
    TeacherDTO toDTO(Teacher teacher);

    @Mapping(source = "user.id", target = "userId")
    Teacher toModel(TeacherDTO teacherDTO);

    UserDTO userDTOFromId(Long id);
}
