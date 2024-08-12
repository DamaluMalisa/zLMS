package com.zahara.lms.subject.repository;

import com.zahara.lms.shared.repository.BaseRepository;
import com.zahara.lms.subject.model.AssignmentGrade;
import com.zahara.lms.subject.model.QuizGrade;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuizGradeRepository extends BaseRepository<QuizGrade, Long> {
    @Override
    @Query(
            "select x from #{#entityName} x where x.deleted = false "
                    + "and (cast(x.id as string) like :search "
                    + "or cast(x.grade as string) like :search or x.feedback like :search)")
    Page<QuizGrade> findContaining(Pageable pageable, String search);

    @Query(
            "select x from #{#entityName} x where x.deleted = false and x.quizSubmission.id = :quizSubmissionId "
                    + "and (cast(x.id as string) like :search "
                    + "or cast(x.grade as string) like :search or x.feedback like :search)")
    Page<QuizGrade> findByQuizSubmissionIdContaining(
            Long quizSubmissionId, Pageable pageable, String search);

    @Query(
            "select x from #{#entityName} x where x.deleted = false and x.studentId = :studentId "
                    + "and (cast(x.id as string) like :search "
                    + "or cast(x.grade as string) like :search or x.feedback like :search)")
    Page<QuizGrade> findByStudentIdContaining(
            Long studentId, Pageable pageable, String search);

    List<QuizGrade> findByQuizSubmissionIdAndDeletedFalse(Long quizSubmissionId);

    List<QuizGrade> findByStudentIdAndDeletedFalse(Long studentId);
}