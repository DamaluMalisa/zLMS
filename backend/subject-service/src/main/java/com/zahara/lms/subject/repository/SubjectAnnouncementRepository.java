package com.zahara.lms.subject.repository;

import com.zahara.lms.shared.repository.BaseRepository;
import com.zahara.lms.subject.model.SubjectAnnouncement;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubjectAnnouncementRepository extends BaseRepository<SubjectAnnouncement, Long> {
    @Override
    @Query(
            "select x from #{#entityName} x where x.deleted = false "
                    + "and (cast(x.id as string) like :search "
                    + "or x.title like :search or x.content like :search or cast(x.timestamp as string) like :search)")
    Page<SubjectAnnouncement> findContaining(Pageable pageable, String search);

    @Query(
            "select x from #{#entityName} x where x.deleted = false and x.subject.id = :subjectId "
                    + "and (cast(x.id as string) like :search "
                    + "or x.title like :search or x.content like :search or cast(x.timestamp as string) like :search)")
    Page<SubjectAnnouncement> findBySubjectIdContaining(
            Long subjectId, Pageable pageable, String search);

    List<SubjectAnnouncement> findBySubjectIdAndDeletedFalseOrderByTimestampDesc(
            Long subjectId);
}
