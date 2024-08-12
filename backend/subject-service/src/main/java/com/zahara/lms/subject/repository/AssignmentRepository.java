package com.zahara.lms.subject.repository;

import com.zahara.lms.shared.repository.BaseRepository;
import com.zahara.lms.subject.model.Assignment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface AssignmentRepository extends BaseRepository<Assignment, Long> {
    @Override
    @Query(
            "select x from #{#entityName} x where x.deleted = false "
                    + "and (cast(x.id as string) like :search "
                    + "or x.title like :search or x.assignmentContent like :search or x.pdfFilePath like :search or cast(x.timestamp as string) like :search or cast(x.availableFrom as string) like :search or cast(x.dueDate as string) like :search or x.submission like :search)")
    Page<Assignment> findContaining(Pageable pageable, String search);

    @Query(
            "select x from #{#entityName} x where x.deleted = false and x.bundle.id = :bundleId "
                    + "and (cast(x.id as string) like :search "
                    + "or x.title like :search or x.assignmentContent like :search  or x.pdfFilePath like :search or cast(x.timestamp as string) like :search or cast(x.availableFrom as string) like :search or cast(x.points as string) like :search or cast(x.dueDate as string) like :search or x.submission like :search)")
    Page<Assignment> findByBundleIdContaining(
            Long bundleId, Pageable pageable, String search);

    List<Assignment> findByBundleIdAndDeletedFalseOrderByTimestampDesc(Long bundleId);

    @Query(
            "select x from #{#entityName} x where x.deleted = false and x.subject.id = :subjectId "
                    + "and (cast(x.id as string) like :search "
                    + "or x.title like :search or x.assignmentContent like :search or x.pdfFilePath like :search or cast(x.timestamp as string) like :search or cast(x.points as string) like :search or cast(x.dueDate as string) like :search or x.submission like :search)")
    Page<Assignment> findBySubjectIdContaining(
            Long subjectId, Pageable pageable, String search);

    List<Assignment> findBySubjectIdAndDeletedFalseOrderByTimestampDesc(Long subjectId);
}
