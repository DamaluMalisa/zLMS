package com.zahara.lms.assessment.model;

import com.zahara.lms.shared.model.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class FillInBlankQuestion extends BaseEntity<Long> {
    @Lob
    @Column(nullable = false)
    private String questionDescription;

    @Lob
    @Column(nullable = false)
    private String correctAnswer;

    @Column(nullable = false)
    private int points;
}
