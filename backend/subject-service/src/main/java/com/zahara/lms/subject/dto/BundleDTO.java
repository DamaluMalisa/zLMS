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
public class BundleDTO extends BaseDTO<Long> {
    @NotBlank(message = "title is mandatory")
    private String title;

    @NotBlank(message = "description is mandatory")
    private String description;

    @NotNull(message = "timestamp is mandatory")
    private LocalDateTime timestamp;

    private TeacherDTO teacher;

    @NotNull(message = "subject is mandatory")
    private SubjectDTO subject;


}