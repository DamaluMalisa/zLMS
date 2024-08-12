package com.zahara.lms.assessment.model;

import com.zahara.lms.shared.model.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.AssertTrue;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class QuestionAssignment extends BaseEntity<Long> {
    @ManyToOne
    private Quiz quiz;

    @ManyToOne
    private MultipleChoiceQuestion multipleChoiceQuestion;

    @ManyToOne
    private TrueOrFalseQuestion trueOrFalseQuestion;

    @ManyToOne
    private FillInBlankQuestion fillInBlankQuestion;

    @Column(name = "assignment_order")
    private int order;

    @PrePersist
    @PreUpdate
    private void validate() {
        if (!isOnlyOneQuestionSet()) {
            throw new IllegalStateException("Only one question type should be set in QuestionAssignment.");
        }
    }

    @AssertTrue(message = "Only one question type should be set.")
    private boolean isOnlyOneQuestionSet() {
        int count = 0;
        if (multipleChoiceQuestion != null) count++;
        if (trueOrFalseQuestion != null) count++;
        if (fillInBlankQuestion != null) count++;
        return count == 1;
    }
}
