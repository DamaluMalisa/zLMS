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
public class TrueOrFalseQuestionDTO extends BaseDTO<Long> {
    @NotBlank(message = "question description cannot be null")
    private String questionDescription;

    @NotNull(message = "correct answer cannot be null")
    private Boolean correctAnswer;

    @NotNull(message = "question description cannot be null")
    private int points;
}
