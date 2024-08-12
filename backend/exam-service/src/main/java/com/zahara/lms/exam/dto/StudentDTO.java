package com.zahara.lms.exam.dto;

import com.zahara.lms.shared.dto.BaseDTO;
import com.zahara.lms.shared.dto.UserDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class StudentDTO extends BaseDTO<Long> {
    private UserDTO user;
    private String firstName;
    private String lastName;
    private String index;
    private Integer yearOfEnrollment;
}
