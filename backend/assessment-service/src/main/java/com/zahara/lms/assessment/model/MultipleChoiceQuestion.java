package com.zahara.lms.assessment.model;

import com.zahara.lms.shared.model.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.Lob;

import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class MultipleChoiceQuestion extends BaseEntity<Long> {
    @Lob
    @Column(nullable = false)
    private String questionDescription;

    @Column(nullable = false)
    @ElementCollection
    private List<String> options;

    @Column(nullable = false)
    private String correctAnswer;

    @Column(nullable = false)
    private int points;

}
