package com.zahara.lms.faculty.dto;

import com.zahara.lms.shared.dto.BaseDTO;
import com.zahara.lms.shared.dto.UserDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class StudentDTO extends BaseDTO<Long> {
    @NotNull(message = "User is mandatory")
    private UserDTO user;

    @NotBlank(message = "First name is mandatory")
    private String firstName;

    @NotBlank(message = "Middle name is mandatory")
    private String middleName;

    @NotBlank(message = "Last name is mandatory")
    private String lastName;

    @NotBlank(message = "Gender is mandatory")
    @Pattern(regexp = "^(male|female)$", message = "Gender must be either 'male' or 'female'")
    private String gender;

    @NotNull(message = "Date of birth is mandatory")
    private LocalDateTime dateOfBirth;

    @NotBlank(message = "Registration number is mandatory")
    @Size(max = 45, message = "Registration number can't be longer than 45 characters")
    private String registrationNumber;

    @NotNull(message = "Year of enrollment is mandatory")
    private Integer yearOfEnrollment;

    private ThesisDTO thesis;

    private StudyProgramDTO studyProgram;

    private Double averageGrade;
    private Integer totalECTS;
}
