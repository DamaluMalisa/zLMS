package com.zahara.lms.assessment.model;

import com.zahara.lms.shared.model.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class QuizAttempt extends BaseEntity<Long> {
    @Column(nullable = false)
    private Long studentId;

    @Column(nullable = false)
    private LocalDateTime timestamp;

    @ManyToOne
    private Quiz quiz;

    @OneToMany(mappedBy = "quizAttempt")
    private List<QuestionAnswer> questionAnswers;

    @Column(nullable = false)
    private int score;

    @PrePersist
    public void prePersist() {
        timestamp = LocalDateTime.now();
    }
}