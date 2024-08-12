package com.zahara.lms.subject.dto;

import com.zahara.lms.shared.dto.BaseDTO;
import com.zahara.lms.subject.model.AssignmentSubmission;
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
public class AssignmentGradeDTO extends BaseDTO<Long> {
    @NotNull(message = "Student is mandatory")
    private StudentDTO student;

    @NotNull(message = "Assignment is mandatory")
    private AssignmentSubmissionDTO assignmentSubmission;

    @NotNull(message = "grade is mandatory")
    private double grade;

    @NotBlank(message = "Feedback is mandatory")
    private String feedback;


}
