package com.zahara.lms.assessment.client;

import com.zahara.lms.assessment.dto.FacultyDTO;
import com.zahara.lms.assessment.dto.StudentDTO;
import com.zahara.lms.assessment.dto.StudyProgramDTO;
import com.zahara.lms.assessment.dto.TeacherDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Set;

@FeignClient("faculty-service")
public interface FacultyFeignClient {
    @GetMapping("/faculties/{id}")
    List<FacultyDTO> getFaculty(@PathVariable Set<Long> id);
    
    @GetMapping("/study-programs/{id}")
    List<StudyProgramDTO> getStudyProgram(@PathVariable Set<Long> id);

    @GetMapping("/teachers/{id}")
    List<TeacherDTO> getTeacher(@PathVariable Set<Long> id);

    @GetMapping("/students/{id}")
    List<StudentDTO> getStudent(@PathVariable Set<Long> id);
}
