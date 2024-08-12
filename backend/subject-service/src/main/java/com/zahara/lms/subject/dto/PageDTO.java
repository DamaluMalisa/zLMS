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
public class PageDTO extends BaseDTO<Long> {
    @NotBlank(message = "title is mandatory")
    private String title;

    @NotBlank(message = "Content is mandatory")
    private String pageContent;

    private String pdfFilePath;

    private LocalDateTime availableFrom;

    private boolean available;

    @NotNull(message = "timestamp is mandatory")
    private LocalDateTime timestamp;

    private TeacherDTO teacher;

    private SubjectDTO subject;

    private BundleDTO bundle;


}