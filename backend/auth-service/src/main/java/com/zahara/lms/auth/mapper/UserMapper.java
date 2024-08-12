package com.zahara.lms.auth.mapper;

import com.zahara.lms.auth.model.User;
import com.zahara.lms.shared.dto.UserDTO;
import com.zahara.lms.shared.dto.UserDetailsDTO;
import com.zahara.lms.shared.mapper.BaseMapper;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper extends BaseMapper<User, UserDetailsDTO, Long> {
    UserDTO userToUserDTO(User user);

    User userDTOtoUser(UserDTO userDTO);

    List<UserDTO> userToUserDTOList(List<User> users);

    List<User> userDTOtoUserList(List<UserDTO> userDTOList);
}
