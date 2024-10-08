package com.zahara.lms.faculty.model;

import com.zahara.lms.shared.model.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class StudyProgram extends BaseEntity<Long> {
    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String acronym;

    @Lob
    @Column(nullable = false)
    private String description;

    @ManyToOne(optional = false)
    private Faculty faculty;

    @ManyToOne(optional = false)
    private Teacher manager;

    @ManyToOne
    private EducationLevel educationLevel;

    @OneToMany(mappedBy = "studyProgram")
    private Set<Student> students = new HashSet<>();
}
