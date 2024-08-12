package com.zahara.lms.subject.dto;

import com.zahara.lms.shared.dto.BaseDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class SubjectDTO extends BaseDTO<Long> {
    @NotBlank(message = "Name is mandatory")
    private String name;

//    @NotBlank(message = "Description is mandatory")
    private String description;

//    @NotBlank(message = "Status is mandatory")
    private String status;

//    @NotBlank(message = "Task is mandatory")
    private String tasks;

//    @NotBlank(message = "Progress is mandatory")
    private Integer progress;

//    @NotBlank(message = "start date is mandatory")
    private String startDate;

//    @NotBlank(message = "end date is mandatory")
    private String endDate;

    @NotNull(message = "Semester is mandatory")
    @Min(value = 1, message = "Semester must be greater than or equal to 1")
    @Max(value = 8, message = "Semester must be less than or equal to 8")
    private Integer semester;

    @NotNull(message = "credits is mandatory")
    private Integer credits;

    @NotNull(message = "ECTS is mandatory")
    @Min(value = 1, message = "ECTS must be greater than or equal to 1")
    @Max(value = 10, message = "ECTS must be less than or equal to 10")
    private Integer ects;

    @NotNull(message = "Study program is mandatory")
    private StudyProgramDTO studyProgram;

    @NotNull(message = "Professor is mandatory")
    private TeacherDTO professor;

    @NotNull(message = "Assistant is mandatory")
    private TeacherDTO assistant;
}
