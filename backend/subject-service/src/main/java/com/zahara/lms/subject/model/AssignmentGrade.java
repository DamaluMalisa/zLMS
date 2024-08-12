package com.zahara.lms.subject.model;

import com.zahara.lms.shared.model.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;

    @Entity
    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    @Setter
public class AssignmentGrade extends BaseEntity<Long> {
    @Column(nullable = false)
    private Long studentId;

    @ManyToOne(optional = false)
    private AssignmentSubmission assignmentSubmission;

    @Column(nullable = false)
    private double grade;

    @Column(nullable = false)
    private String feedback;

}