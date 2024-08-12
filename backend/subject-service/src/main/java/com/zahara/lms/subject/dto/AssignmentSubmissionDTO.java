package com.zahara.lms.subject.dto;

import com.zahara.lms.shared.dto.BaseDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AssignmentSubmissionDTO extends BaseDTO<Long> {
    @NotNull(message = "Student is mandatory")
    private StudentDTO student;

    @NotNull(message = "Assignment is mandatory")
    private AssignmentDTO assignment;

    @NotBlank(message = "content is mandatory")
    private String content;

    @NotNull(message = "Submission timestamp is mandatory")
    private LocalDateTime submissionTimestamp;


}
