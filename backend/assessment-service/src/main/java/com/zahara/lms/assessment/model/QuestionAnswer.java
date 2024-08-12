package com.zahara.lms.assessment.model;

import com.zahara.lms.shared.model.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class QuestionAnswer extends BaseEntity<Long> {
    @ManyToOne
    private QuizAttempt quizAttempt;

    @ManyToOne
    private MultipleChoiceQuestion multipleChoiceQuestion;

    @ManyToOne
    private TrueOrFalseQuestion trueOrFalseQuestion;

    @ManyToOne
    private FillInBlankQuestion fillInBlankQuestion;

    @Lob
    @Column(nullable = false)
    private String studentAnswer;

    @Column(nullable = false)
    private boolean isCorrect;

    @Column(nullable = false)
    private int score;
}

