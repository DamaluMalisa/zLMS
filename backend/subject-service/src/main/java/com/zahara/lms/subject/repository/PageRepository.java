package com.zahara.lms.subject.repository;

import com.zahara.lms.shared.repository.BaseRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PageRepository extends BaseRepository<com.zahara.lms.subject.model.Page, Long> {
    @Override
    @Query(
            "select x from #{#entityName} x where x.deleted = false "
                    + "and (cast(x.id as string) like :search "
                    + "or x.title like :search or x.pageContent like :search or x.pdfFilePath like :search or x.available like :search or cast(x.availableFrom as string) like :search or cast(x.timestamp as string) like :search)")
    Page<com.zahara.lms.subject.model.Page> findContaining(Pageable pageable, String search);

    @Query(
            "select x from #{#entityName} x where x.deleted = false and x.bundle.id = :bundleId "
                    + "and (cast(x.id as string) like :search "
                    + "or x.title like :search or x.pageContent like :search or x.pdfFilePath like :search or x.available like :search or cast(x.availableFrom as string) like :search or cast(x.timestamp as string) like :search)")
    Page<com.zahara.lms.subject.model.Page> findByBundleIdContaining(
            Long bundleId, Pageable pageable, String search);

    @Query(
            "select x from #{#entityName} x where x.deleted = false and x.subject.id = :subjectId "
                    + "and (cast(x.id as string) like :search "
                    + "or x.title like :search or x.pageContent like :search or x.pdfFilePath like :search or x.available like :search or cast(x.availableFrom as string) like :search or cast(x.timestamp as string) like :search)")
    Page<com.zahara.lms.subject.model.Page> findBySubjectIdContaining(
            Long subjectId, Pageable pageable, String search);

    List<com.zahara.lms.subject.model.Page> findByBundleIdAndDeletedFalseOrderByTimestampDesc(Long bundleId);

    List<com.zahara.lms.subject.model.Page> findBySubjectIdAndDeletedFalseOrderByTimestampDesc(Long subjectId);
}

