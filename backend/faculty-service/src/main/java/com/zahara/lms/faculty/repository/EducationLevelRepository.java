package com.zahara.lms.faculty.repository;

import com.zahara.lms.faculty.model.EducationLevel;
import com.zahara.lms.shared.repository.BaseRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EducationLevelRepository extends BaseRepository<EducationLevel, Long> {
    @Override
    @Query(
            "select x from #{#entityName} x "
                    + "where x.deleted = false "
                    + "and (cast(x.id as string) like :search "
                    + "or x.name like :search or x.description like :search)")
    Page<EducationLevel> findContaining(Pageable pageable, String search);
}
