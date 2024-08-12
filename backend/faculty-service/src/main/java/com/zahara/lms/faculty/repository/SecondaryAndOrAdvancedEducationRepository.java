package com.zahara.lms.faculty.repository;

import com.zahara.lms.faculty.model.SecondaryAndOrAdvancedEducation;
import com.zahara.lms.shared.repository.BaseRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;

public interface SecondaryAndOrAdvancedEducationRepository extends BaseRepository<SecondaryAndOrAdvancedEducation, Long> {
    @Override
    @Query(
            "select x from #{#entityName} x "
                    + "where x.deleted = false "
                    + "and (cast(x.id as string) like :search "
                    + "or x.formFourIndexNumber like :search or x.examCenter like :search or cast(x.year as string) like :search)")
    Page<SecondaryAndOrAdvancedEducation> findContaining(Pageable pageable, String search);
}
