package com.zahara.lms.faculty.util;

import com.zahara.lms.faculty.dto.StudentDTO;
import com.zahara.lms.shared.util.PDFExporter;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class StudentsOnSubjectPDFExporter extends PDFExporter<StudentDTO, Long> {
    public StudentsOnSubjectPDFExporter() {
        super(
                "Students on subject list",
                new String[] {
                    "ID",
                    "Username",
                    "First name",
                    "Last name",
                    "Registration number",
                    "Enrollment",
                    "Grade",
                    "ECTS",
                },
                new float[] {1.5f, 5.5f, 3f, 3f, 3f, 1.25f, 1.25f, 1f},
                new ArrayList<>(
                        List.of(
                                student -> String.valueOf(student.getId()),
                                student -> student.getUser().getUsername(),
                                StudentDTO::getFirstName,
                                StudentDTO::getLastName,
                                StudentDTO::getGender,
                                StudentDTO::getRegistrationNumber,
                                student -> String.valueOf(student.getYearOfEnrollment()),
                                student -> String.valueOf(student.getAverageGrade()),
                                student -> String.valueOf(student.getTotalECTS()))));
    }
}
