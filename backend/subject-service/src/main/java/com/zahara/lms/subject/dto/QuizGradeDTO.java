package com.zahara.lms.subject.dto;

import com.zahara.lms.shared.dto.BaseDTO;
import com.zahara.lms.subject.model.QuizSubmission;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class QuizGradeDTO extends BaseDTO<Long> {
    @NotNull(message = "Student is mandatory")
    private StudentDTO student;

    @NotNull(message = "Quiz is mandatory")
    private QuizSubmissionDTO quizSubmission;

    @NotNull(message = "grade is mandatory")
    private double grade;

    @NotBlank(message = "Feedback is mandatory")
    private String feedback;


}