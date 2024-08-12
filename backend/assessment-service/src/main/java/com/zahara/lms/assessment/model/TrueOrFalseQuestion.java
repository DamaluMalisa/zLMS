package com.zahara.lms.assessment.model;

import com.zahara.lms.shared.model.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class TrueOrFalseQuestion extends BaseEntity<Long> {
    @Lob
    @Column(nullable = false)
    private String questionDescription;

    @Column(nullable = false)
    private Boolean correctAnswer;

    @Column(nullable = false)
    private int points;
}
