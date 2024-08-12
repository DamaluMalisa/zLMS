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
public class FillInBlankQuestionDTO extends BaseDTO<Long> {
    @NotBlank(message = "Question description cannot be null")
    private String questionDescription;

    @NotBlank(message = "correct answer cannot be null")
    private String correctAnswer;

    @NotNull(message = "points cannot be null")
    private int points;
}
