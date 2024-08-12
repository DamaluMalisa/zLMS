package com.zahara.lms.faculty.model;

import com.zahara.lms.shared.model.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class SecondaryAndOrAdvancedEducation extends BaseEntity<Long> {

    @Column(nullable = false, unique = true)
    private String formFourIndexNumber;

    private String examCenter;
    private int year;

    @ManyToOne(optional = false)
    private StudentInfo studentInfo;
}
