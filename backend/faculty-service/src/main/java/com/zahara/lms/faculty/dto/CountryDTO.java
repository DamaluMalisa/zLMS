package com.zahara.lms.faculty.dto;

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
public class CountryDTO extends BaseDTO<Long> {
    @NotBlank(message = "Name is mandatory")
    private String name;
}
