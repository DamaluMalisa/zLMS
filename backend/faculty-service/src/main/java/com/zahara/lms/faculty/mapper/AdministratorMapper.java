package com.zahara.lms.faculty.mapper;

import com.zahara.lms.faculty.dto.AdministratorDTO;
import com.zahara.lms.faculty.model.Administrator;
import com.zahara.lms.shared.dto.UserDTO;
import com.zahara.lms.shared.mapper.BaseMapper;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AdministratorMapper extends BaseMapper<Administrator, AdministratorDTO, Long> {
    @Mapping(source = "userId", target = "user")
    AdministratorDTO toDTO(Administrator administrator);

    @Mapping(source = "user.id", target = "userId")
    Administrator toModel(AdministratorDTO administratorDTO);

    UserDTO userDTOFromId(Long id);
}
