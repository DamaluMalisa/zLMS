package com.zahara.lms.assessment.dto;

import com.zahara.lms.shared.dto.BaseDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class QuestionAnswerDTO extends BaseDTO<Long> {
    @NotNull(message = "quiz attempt cannot be null")
    private QuizAttemptDTO quizAttempt;

    @NotNull(message = "multiple choice question cannot be null")
    private MultipleChoiceQuestionDTO multipleChoiceQuestion;

    @NotNull(message = "true or false question cannot be null")
    private TrueOrFalseQuestionDTO trueOrFalseQuestion;

    @NotNull(message = "fill in blank question cannot be null")
    private FillInBlankQuestionDTO fillInBlankQuestion;

    @NotBlank(message = "student answer cannot be null")
    private String studentAnswer;

    @NotBlank(message = "is correct cannot be null")
    private boolean isCorrect;

    @NotNull(message = "score cannot be null")
    private int score;
}
