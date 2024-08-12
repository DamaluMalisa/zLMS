package com.zahara.lms.assessment.repository;

import com.zahara.lms.assessment.model.QuizAttempt;
import com.zahara.lms.shared.repository.BaseRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuizAttemptRepository extends BaseRepository<QuizAttempt, Long> {

    @Override
    @Query(
            "select x from #{#entityName} x where x.deleted = false "
                    + "and (cast(x.id as string) like :search "
                    + "or cast(x.score as string) like :search)")
    Page<QuizAttempt> findContaining(Pageable pageable, String search);

    @Query(
            "select x from #{#entityName} x where x.deleted = false and x.quiz.id = :quizId "
                    + "and (cast(x.id as string) like :search "
                    + "or cast(x.score as string) like :search)")
    Page<QuizAttempt> findByQuizIdContaining(Long quizId, Pageable pageable, String search);

    List<QuizAttempt> findByQuizIdAndDeletedFalse(Long quizId);

    @Query(
            "select x from #{#entityName} x where x.deleted = false and x.studentId = :studentId "
                    + "and (cast(x.id as string) like :search "
                    + "or cast(x.score as string) like :search)")
    Page<QuizAttempt> findByStudentIdContaining(Long studentId, Pageable pageable, String search);

    List<QuizAttempt> findByStudentIdAndDeletedFalse(Long studentId);
}
