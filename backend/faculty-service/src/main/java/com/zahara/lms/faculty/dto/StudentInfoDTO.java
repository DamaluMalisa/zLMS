package com.zahara.lms.faculty.dto;

import com.zahara.lms.shared.dto.BaseDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class StudentInfoDTO extends BaseDTO<Long> {

    @NotBlank(message = "Email is mandatory")
    @Email(message = "Please provide a valid email")
    private String email;

    @NotBlank(message = "Phone number is mandatory")
    @Pattern(regexp = "^\\+?[0-9\\s-]{3,}$", message = "Please provide a valid phone number")
    private String phoneNumber;

    private String nextOfKinPhoneNumber;

    @NotBlank(message = "Address is mandatory")
    private String address;

    private double GPA;

    private String academicStatus;

    @NotNull(message = "Total credits earned is mandatory")
    private Integer totalCreditsEarned;

    @NotNull(message = "Total courses is mandatory")
    private Integer totalCourses;

    private String nationality;

    private String emergencyContact;

    private String birthPlace;

    private String maritalStatus;

    private String scholarshipDetails;

    private String financialAidStatus;

    private StudentDTO studentDTO;

}
