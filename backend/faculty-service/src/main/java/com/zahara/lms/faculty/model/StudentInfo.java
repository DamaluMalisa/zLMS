package com.zahara.lms.faculty.model;

import com.zahara.lms.shared.model.BaseEntity;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class StudentInfo extends BaseEntity<Long> {

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String phoneNumber;

    private String nextOfKinPhoneNumber;

    @Column(nullable = false)
    private String address;

    private double GPA;

    private String academicStatus;

    private int totalCreditsEarned;

    private int totalCourses;

    private String nationality;

    private String emergencyContact;

    private String birthPlace;

    private String maritalStatus;

    private String scholarshipDetails;

    private String financialAidStatus;

    @OneToMany(mappedBy = "studentInfo")
    private Set<SecondaryAndOrAdvancedEducation> secondaryAndOrAdvancedEducation = new HashSet<>();

    @ManyToOne(optional = false)
    private Student student;
}
