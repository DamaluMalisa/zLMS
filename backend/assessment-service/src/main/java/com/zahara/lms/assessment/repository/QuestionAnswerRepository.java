package com.zahara.lms.assessment.repository;

import com.zahara.lms.assessment.model.QuestionAnswer;
import com.zahara.lms.shared.repository.BaseRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionAnswerRepository  extends BaseRepository<QuestionAnswer, Long> {

    @Override
    @Query(
            "select x from #{#entityName} x where x.deleted = false "
                    + "and (cast(x.id as string) like :search "
                    + "or x.studentAnswer like :search "
                    + "or x.score like :search "
                    + "or cast(x.isCorrect as string) like :search)")
    Page<QuestionAnswer> findContaining(Pageable pageable, String search);

    @Query(
            "select x from #{#entityName} x where x.deleted = false and x.quizAttempt.id = :quizAttemptId "
                    + "and (cast(x.id as string) like :search "
                    + "or x.studentAnswer like :search "
                    + "or x.score like :search "
                    + "or cast(x.isCorrect as string) like :search)")
    Page<QuestionAnswer> findByQuizAttemptIdContaining(Long quizAttemptId, Pageable pageable, String search);

    List<QuestionAnswer> findByQuizAttemptIdAndDeletedFalse(Long quizAttemptId);
}
