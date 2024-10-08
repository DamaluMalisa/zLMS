package com.zahara.lms.faculty.repository;

import com.zahara.lms.faculty.model.Teacher;
import com.zahara.lms.shared.repository.BaseRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TeacherRepository extends BaseRepository<Teacher, Long> {
    @Override
    @Query(
            "select x from #{#entityName} x where x.deleted = false "
                    + "and (cast(x.id as string) like :search "
                    + "or x.profilePhoto like :search or x.firstName like :search or x.lastName like :search)")
    Page<Teacher> findContaining(Pageable pageable, String search);

    Optional<Teacher> findByUserId(Long userId);
}
