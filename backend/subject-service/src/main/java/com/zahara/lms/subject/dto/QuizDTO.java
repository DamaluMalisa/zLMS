package com.zahara.lms.subject.dto;

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
public class QuizDTO extends BaseDTO<Long> {
    @NotBlank(message = "title is mandatory")
    private String title;

    @NotBlank(message = "Content is mandatory")
    private String quizContent;

    @NotNull(message = "timestamp is mandatory")
    private LocalDateTime timestamp;

    private LocalDateTime availableFrom;

    private LocalDateTime dueDate;

    private boolean available;

    private double points;

    private String submission;

    private TeacherDTO teacher;

    private SubjectDTO subject;

    private BundleDTO bundle;


}