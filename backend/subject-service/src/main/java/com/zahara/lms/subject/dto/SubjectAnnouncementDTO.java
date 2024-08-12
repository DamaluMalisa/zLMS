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
public class SubjectAnnouncementDTO extends BaseDTO<Long> {
    @NotBlank(message = "title is mandatory")
    private String title;

    @NotBlank(message = "content is mandatory")
    private String content;

    @NotNull(message = "timestamp is mandatory")
    private LocalDateTime timestamp;

    @NotNull(message = "teacher is mandatory")
    private TeacherDTO teacher;

    @NotNull(message = "Subject is mandatory")
    private SubjectDTO subject;
}
