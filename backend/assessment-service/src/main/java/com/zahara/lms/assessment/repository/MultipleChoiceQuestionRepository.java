package com.zahara.lms.assessment.repository;

import com.zahara.lms.assessment.model.MultipleChoiceQuestion;
import com.zahara.lms.shared.repository.BaseRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface MultipleChoiceQuestionRepository extends BaseRepository<MultipleChoiceQuestion, Long> {
    @Override
    @Query(
            "select x from #{#entityName} x where x.deleted = false "
                    + "and (cast(x.id as string) like :search "
                    + "or x.questionDescription like :search "
                    + "or cast(x.points as string) like :search)"
    )
    Page<MultipleChoiceQuestion> findContaining(Pageable pageable, String search);
}
