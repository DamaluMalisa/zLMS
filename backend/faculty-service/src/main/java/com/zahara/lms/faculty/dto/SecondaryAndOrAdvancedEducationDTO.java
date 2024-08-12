package com.zahara.lms.faculty.dto;

import com.zahara.lms.shared.dto.BaseDTO;
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
public class SecondaryAndOrAdvancedEducationDTO extends BaseDTO<Long> {

    @NotBlank(message = "Form IV index number is mandatory")
    private String formFourIndexNumber;

    private String examCenter;

    @NotNull(message = "Year is mandatory")
    private Integer year;

    private StudentInfoDTO studentInfo;

}
