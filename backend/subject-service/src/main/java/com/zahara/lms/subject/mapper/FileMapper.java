package com.zahara.lms.subject.mapper;

import com.zahara.lms.shared.dto.UserDTO;
import com.zahara.lms.shared.mapper.BaseMapper;
import com.zahara.lms.subject.dto.FileDTO;
import com.zahara.lms.subject.model.File;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface FileMapper extends BaseMapper<File, FileDTO, Long> {
    @Mapping(source = "userId", target = "user")
    FileDTO toDTO(File file);

    @Mapping(source = "user.id", target = "userId")
    File toModel(FileDTO fileDTO);

    UserDTO userDTOFromId(Long id);
}