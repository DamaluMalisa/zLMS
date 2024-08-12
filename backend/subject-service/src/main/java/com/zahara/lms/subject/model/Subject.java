package com.zahara.lms.subject.model;

import com.zahara.lms.shared.model.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Subject extends BaseEntity<Long> {
    @Column(nullable = false)
    private String name;

    @Lob
    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String status;

    @Column(nullable = false)
    private String tasks;

    @Column
    private Integer progress;

    @Column
    private LocalDateTime startDate;

    @Column
    private LocalDateTime endDate;

    @Column(nullable = false)
    private Integer semester;

    @Column(nullable = false)
    private Integer credits;

    @Column(nullable = false)
    private Integer ects;

    @Column(nullable = false)
    private Long studyProgramId;

    @Column(nullable = false)
    private Long professorId;

    @Column(nullable = false)
    private Long assistantId;

    @OneToMany(mappedBy = "subject")
    private Set<SubjectEnrollment> subjectEnrollments = new HashSet<>();

    @OneToMany(mappedBy = "subject")
    private Set<SubjectAnnouncement> subjectAnnouncements = new HashSet<>();

    @OneToMany(mappedBy = "subject")
    private Set<Bundle> bundles = new HashSet<>();
}
