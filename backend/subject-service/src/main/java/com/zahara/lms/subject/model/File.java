package com.zahara.lms.subject.model;

import com.zahara.lms.shared.model.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class File extends BaseEntity<Long> {
    @Column(nullable = false)
    private String fileName;

    @Lob
    @Column(nullable = false)
    private String contentType;

    @Lob
    @Column(nullable = false)
    private String filePath;

    @Column(nullable = false)
    private LocalDateTime uploadTimestamp;

    @Column
    private Long userId;


}