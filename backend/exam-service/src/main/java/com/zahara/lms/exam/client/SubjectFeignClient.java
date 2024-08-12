package com.zahara.lms.exam.client;

import com.zahara.lms.exam.dto.SubjectDTO;
import com.zahara.lms.exam.dto.SubjectEnrollmentDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Set;

@FeignClient("subject-service")
public interface SubjectFeignClient {
    @GetMapping("/subjects/{id}")
    List<SubjectDTO> getSubject(@PathVariable Set<Long> id);

    @GetMapping("/subjects/teacher/{id}/all")
    List<SubjectDTO> getSubjectByTeacherId(@PathVariable Long id);

    @GetMapping("/subjects/student/{id}/all")
    List<SubjectDTO> getSubjectByStudentId(@PathVariable Long id);

    @GetMapping("/subject-enrollments/{id}")
    List<SubjectEnrollmentDTO> getSubjectEnrollment(@PathVariable Set<Long> id);

    @GetMapping("/subject-enrollments/student/{id}/all")
    List<SubjectEnrollmentDTO> getSubjectEnrollmentByStudentId(@PathVariable Long id);
}
