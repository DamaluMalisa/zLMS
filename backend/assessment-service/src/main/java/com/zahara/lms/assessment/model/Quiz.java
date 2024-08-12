package com.zahara.lms.assessment.model;

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
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Quiz extends BaseEntity<Long> {
    @Column(nullable = false)
    private String title;

    @Lob
    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private LocalDateTime timestamp;

    private LocalDateTime availableFrom;

    private LocalDateTime dueDate;

    private double totalPoints;

    private boolean available = true;

    @Column(nullable = false)
    private Long teacherId;

    @Column(nullable = false)
    private Long subjectId;

//    @Column(nullable = false)
    private Long bundleId;

    @OneToMany(mappedBy = "quiz")
    private List<QuestionAssignment> questionAssignments;



}