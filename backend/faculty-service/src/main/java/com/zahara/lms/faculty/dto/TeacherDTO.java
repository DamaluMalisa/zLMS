package com.zahara.lms.faculty.dto;

import com.zahara.lms.shared.dto.BaseDTO;
import com.zahara.lms.shared.dto.UserDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class TeacherDTO extends BaseDTO<Long> {
    @NotNull(message = "User is mandatory")
    private UserDTO user;

    @NotBlank(message = "Profile photo is mandatory")
    private String profilePhoto;

    @NotBlank(message = "First name is mandatory")
    private String firstName;

    @NotBlank(message = "Last name is mandatory")
    private String lastName;
}
