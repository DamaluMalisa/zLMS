package com.zahara.lms.assessment.dto;

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
public class AnswerOptionDTO extends BaseDTO<Long> {
    @NotNull(message = "Subject enrollment is mandatory")
    private QuestionAnswerDTO questionAnswer;

    @NotBlank(message = "Question description cannot be null")
    private String optionText;
}
