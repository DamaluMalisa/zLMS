package com.zahara.lms.assessment.dto;

import com.zahara.lms.shared.dto.BaseDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class MultipleChoiceQuestionDTO extends BaseDTO<Long> {
    @NotBlank(message = "question description cannot be null")
    private String questionDescription;

    @NotNull(message = "option can not be null")
    private List<String> options;

    @NotBlank(message = "correct answer cannot be null")
    private String correctAnswer;

    @NotNull(message = "points cannot be null")
    private int points;

}
