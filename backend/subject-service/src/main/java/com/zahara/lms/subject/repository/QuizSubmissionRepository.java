package com.zahara.lms.subject.repository;

import com.zahara.lms.shared.repository.BaseRepository;
import com.zahara.lms.subject.model.AssignmentSubmission;
import com.zahara.lms.subject.model.QuizSubmission;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuizSubmissionRepository extends BaseRepository<QuizSubmission, Long> {
    @Override
    @Query(
            "select x from #{#entityName} x where x.deleted = false "
                    + "and (cast(x.id as string) like :search "
                    + "or x.content like :search or cast(x.submissionTimestamp as string) like :search)")
    Page<QuizSubmission> findContaining(Pageable pageable, String search);

    @Query(
            "select x from #{#entityName} x where x.deleted = false and x.quiz.id = :quizId "
                    + "and (cast(x.id as string) like :search "
                    + "or x.content like :search or cast(x.submissionTimestamp as string) like :search)")
    Page<QuizSubmission> findByQuizIdContaining(
            Long quizId, Pageable pageable, String search);

    @Query(
            "select x from #{#entityName} x where x.deleted = false and x.studentId = :studentId "
                    + "and (cast(x.id as string) like :search "
                    + "or x.content like :search or cast(x.submissionTimestamp as string) like :search)")
    Page<QuizSubmission> findByStudentIdContaining(
            Long studentId, Pageable pageable, String search);

    List<QuizSubmission> findByQuizIdAndDeletedFalseOrderBySubmissionTimestampDesc(Long quizId);

    List<QuizSubmission> findByStudentIdAndDeletedFalseOrderBySubmissionTimestampDesc(Long studentId);
}