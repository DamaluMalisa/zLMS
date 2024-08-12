package com.zahara.lms.assessment.dto;

import com.zahara.lms.shared.dto.BaseDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class QuizAttemptDTO extends BaseDTO<Long> {
    @NotNull(message = "student is mandatory")
    private StudentDTO student;

    @NotNull(message = "timestamp is mandatory")
    private LocalDateTime timestamp;

    @NotNull(message = "quiz is mandatory")
    private QuizDTO quiz;

    @NotNull(message = "score is mandatory")
    private int score;
}
