package com.zahara.lms.subject.dto;

import com.zahara.lms.shared.dto.BaseDTO;
import com.zahara.lms.subject.model.Quiz;
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
public class QuizSubmissionDTO extends BaseDTO<Long> {
    @NotNull(message = "Student is mandatory")
    private StudentDTO student;

    @NotNull(message = "Quiz is mandatory")
    private QuizDTO quiz;

    @NotBlank(message = "content is mandatory")
    private String content;

    @NotNull(message = "Submission timestamp is mandatory")
    private LocalDateTime submissionTimestamp;


}
