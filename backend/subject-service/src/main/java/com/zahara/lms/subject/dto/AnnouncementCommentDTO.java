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
public class AnnouncementCommentDTO extends BaseDTO<Long> {
    @NotNull(message = "Student is mandatory")
    private StudentDTO student;

    @NotBlank(message = "Content is mandatory")
    private String content;

    @NotNull(message = "timestamp is mandatory")
    private LocalDateTime timestamp;

    @NotNull(message = "Subject Announcement is mandatory")
    private SubjectAnnouncementDTO subjectAnnouncement;
}
