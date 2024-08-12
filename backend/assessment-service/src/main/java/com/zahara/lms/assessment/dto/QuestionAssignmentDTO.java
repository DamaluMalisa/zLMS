package com.zahara.lms.assessment.dto;

import com.zahara.lms.shared.dto.BaseDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class QuestionAssignmentDTO extends BaseDTO<Long> {
    @NotNull(message = "quiz cannot be null")
    private QuizDTO quiz;

    @NotNull(message = "multiple choice is mandatory")
    private MultipleChoiceQuestionDTO multipleChoiceQuestion;

    @NotNull(message = "true or false is mandatory")
    private TrueOrFalseQuestionDTO trueOrFalseQuestion;

    @NotNull(message = "fill in blank question is mandatory")
    private FillInBlankQuestionDTO fillInBlankQuestion;

    @NotNull(message = "order cannot be null")
    private int order;
}
