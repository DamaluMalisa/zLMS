package com.zahara.lms.faculty.dto;

import com.zahara.lms.shared.dto.BaseDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class SubjectDTO extends BaseDTO<Long> {
    private String name;
    private String syllabus;
    private Integer semester;
    private Integer ects;
    private StudyProgramDTO studyProgram;
    private TeacherDTO professor;
    private TeacherDTO assistant;
}
