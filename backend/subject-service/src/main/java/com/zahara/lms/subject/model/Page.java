package com.zahara.lms.subject.model;
import com.zahara.lms.shared.model.BaseEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Page extends BaseEntity<Long> {
    @Column(nullable = false)
    private String title;

    @Lob
    @Column(nullable = false)
    private String pageContent;

    private String pdfFilePath;

    private LocalDateTime availableFrom;

    private boolean available = true;

    @Column(nullable = false)
    private LocalDateTime timestamp;

    @Column(nullable = false)
    private Long teacherId;

    @ManyToOne
    private Subject subject;

    @ManyToOne
    private Bundle bundle;


}