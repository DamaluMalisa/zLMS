package com.zahara.lms.exam.dto;

import com.zahara.lms.shared.dto.BaseDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ExamTypeDTO extends BaseDTO<Long> {
    @NotBlank(message = "Name is mandatory")
    private String name;
}
