package com.zahara.lms.subject.repository;

import com.zahara.lms.shared.repository.BaseRepository;
import com.zahara.lms.subject.model.AssignmentSubmission;
import com.zahara.lms.subject.model.File;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AssignmentSubmissionRepository extends BaseRepository<AssignmentSubmission, Long> {
    @Override
    @Query(
            "select x from #{#entityName} x where x.deleted = false "
                    + "and (cast(x.id as string) like :search "
                    + "or x.content like :search or cast(x.submissionTimestamp as string) like :search)")
    Page<AssignmentSubmission> findContaining(Pageable pageable, String search);

    @Query(
            "select x from #{#entityName} x where x.deleted = false and x.assignment.id = :assignmentId "
                    + "and (cast(x.id as string) like :search "
                    + "or x.content like :search or cast(x.submissionTimestamp as string) like :search)")
    Page<AssignmentSubmission> findByAssignmentIdContaining(
            Long assignmentId, Pageable pageable, String search);

    @Query(
            "select x from #{#entityName} x where x.deleted = false and x.studentId = :studentId "
                    + "and (cast(x.id as string) like :search "
                    + "or x.content like :search or cast(x.submissionTimestamp as string) like :search)")
    Page<AssignmentSubmission> findByStudentIdContaining(
            Long studentId, Pageable pageable, String search);

    List<AssignmentSubmission> findByAssignmentIdAndDeletedFalseOrderBySubmissionTimestampDesc(Long assignmentId);

    List<AssignmentSubmission> findByStudentIdAndDeletedFalseOrderBySubmissionTimestampDesc(Long studentId);
}