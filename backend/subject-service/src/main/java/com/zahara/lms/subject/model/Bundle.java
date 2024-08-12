package com.zahara.lms.subject.model;

import com.zahara.lms.shared.model.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Bundle extends BaseEntity<Long> {
    @Column(nullable = false)
    private String title;

    @Lob
    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private LocalDateTime timestamp;

    @ManyToOne(optional = false)
    private Subject subject;

    @Column(nullable = false)
    private Long teacherId;

    @OneToMany(mappedBy = "bundle")
    private Set<Page> pages = new HashSet<>();

    @OneToMany(mappedBy = "bundle")
    private Set<Assignment> assignments = new HashSet<>();

    @OneToMany(mappedBy = "bundle")
    private Set<Quiz> quizzes = new HashSet<>();
}

