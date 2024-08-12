package com.zahara.lms.assessment.repository;

import com.zahara.lms.assessment.model.QuestionAssignment;
import com.zahara.lms.shared.repository.BaseRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionAssignmentRepository extends BaseRepository<QuestionAssignment, Long> {

    @Override
    @Query(
            "select x from #{#entityName} x where x.deleted = false "
                    + "and (cast(x.id as string) like :search "
                    + "or cast(x.order as string) like :search "
                    + "or cast(x.quiz.title as string) like :search)")
    Page<QuestionAssignment> findContaining(Pageable pageable, String search);

    @Query(
            "select x from #{#entityName} x where x.deleted = false and x.quiz.id = :quizId "
                    + "and (cast(x.id as string) like :search "
                    + "or cast(x.order as string) like :search "
                    + "or cast(x.quiz.title as string) like :search)")
    Page<QuestionAssignment> findByQuizIdContaining(Long quizId, Pageable pageable, String search);

    List<QuestionAssignment> findByQuizIdAndDeletedFalse(Long quizId);
}
