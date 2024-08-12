package com.zahara.lms.subject.repository;

import com.zahara.lms.shared.repository.BaseRepository;
import com.zahara.lms.subject.model.Bundle;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BundleRepository extends BaseRepository<Bundle, Long> {
    @Override
    @Query(
            "select x from #{#entityName} x where x.deleted = false "
                    + "and (cast(x.id as string) like :search "
                    + "or x.title like :search or x.description like :search)")
    Page<Bundle> findContaining(Pageable pageable, String search);

    @Query(
            "select x from #{#entityName} x where x.deleted = false and x.subject.id = :subjectId "
                    + "and (cast(x.id as string) like :search "
                    + "or x.title like :search or x.description like :search)")
    Page<Bundle> findBySubjectIdContaining(
            Long subjectId, Pageable pageable, String search);

    @Query("SELECT DISTINCT b FROM #{#entityName} b " +
            "LEFT JOIN FETCH b.pages " +
            "LEFT JOIN FETCH b.assignments " +
            "LEFT JOIN FETCH b.quizzes " +
            "WHERE b.deleted = false " +
            "AND b.subject.id = :subjectId")
    List<Bundle> findBySubjectIdWithAssociations(Long subjectId);

    List<Bundle> findBySubjectIdAndDeletedFalseOrderByTimestampDesc(Long subjectId);

    List<Bundle> findByTeacherIdAndDeletedFalseOrderByTimestampDesc(Long teacherId);
}