package com.zahara.lms.subject.repository;

import com.zahara.lms.shared.repository.BaseRepository;
import com.zahara.lms.subject.model.AnnouncementComment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnnouncementCommentRepository extends BaseRepository<AnnouncementComment, Long> {
    @Override
    @Query(
            "select x from #{#entityName} x where x.deleted = false "
                    + "and (cast(x.id as string) like :search "
                    + "or x.content like :search or cast(x.timestamp as string) like :search)")
    Page<AnnouncementComment> findContaining(Pageable pageable, String search);

    @Query(
            "select x from #{#entityName} x where x.deleted = false and x.subjectAnnouncement.id = :subjectAnnouncementId "
            + "and (cast(x.id as string) like :search "
                    + "or x.content like :search or cast(x.timestamp as string) like :search)")
    Page<AnnouncementComment> findBySubjectAnnouncementIdContaining(
            Long subjectAnnouncementId, Pageable pageable, String search);

    @Query(
            "select x from #{#entityName} x where x.deleted = false and x.studentId = :studentId "
                    + "and (cast(x.id as string) like :search "
                    + "or x.content like :search or cast(x.timestamp as string) like :search)")
    Page<AnnouncementComment> findByStudentIdContaining(
            Long studentId, Pageable pageable, String search);


    List<AnnouncementComment> findByStudentIdAndDeletedFalse(Long subjectAnnouncementId);


    List<AnnouncementComment> findBySubjectAnnouncementIdAndDeletedFalseOrderByTimestampDesc(
            Long subjectAnnouncementId);
}
