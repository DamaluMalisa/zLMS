package com.zahara.lms.faculty.mapper;

import com.zahara.lms.faculty.dto.StudentInfoDTO;
import com.zahara.lms.faculty.model.StudentInfo;
import com.zahara.lms.shared.mapper.BaseMapper;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface StudentInfoMapper extends BaseMapper<StudentInfo, StudentInfoDTO, Long> {}
