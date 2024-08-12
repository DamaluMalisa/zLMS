package com.zahara.lms.assessment.dto;

import com.zahara.lms.shared.dto.BaseDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class QuizDTO extends BaseDTO<Long> {
    @NotBlank(message = "title cannot be null")
    private String title;

    @NotBlank(message = "description cannot be null")
    private String description;

    @NotNull(message = "timestamp cannot be null")
    private LocalDateTime timestamp;

    private LocalDateTime availableFrom;

    private LocalDateTime dueDate;

    private double totalPoints;

    private boolean available;

    @NotNull(message = "teacher cannot be null")
    private TeacherDTO teacher;

    @NotNull(message = "subject cannot be null")
    private SubjectDTO subject;

    private BundleDTO bundle;
}