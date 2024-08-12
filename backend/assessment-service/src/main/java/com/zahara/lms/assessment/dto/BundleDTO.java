package com.zahara.lms.assessment.dto;

import com.zahara.lms.shared.dto.BaseDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class BundleDTO extends BaseDTO<Long> {
        private String title;
        private String description;
        private LocalDateTime timestamp;
        private TeacherDTO teacher;
        private SubjectDTO subject;
    }

