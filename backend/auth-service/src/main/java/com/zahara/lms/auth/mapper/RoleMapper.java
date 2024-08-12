package com.zahara.lms.auth.mapper;

import com.zahara.lms.auth.model.Role;
import com.zahara.lms.shared.dto.RoleDTO;
import com.zahara.lms.shared.mapper.BaseMapper;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface RoleMapper extends BaseMapper<Role, RoleDTO, Long> {}
