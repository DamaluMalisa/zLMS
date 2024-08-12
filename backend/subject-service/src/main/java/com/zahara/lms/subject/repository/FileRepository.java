package com.zahara.lms.subject.repository;

import com.zahara.lms.shared.repository.BaseRepository;
import com.zahara.lms.subject.model.File;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FileRepository extends BaseRepository<File, Long> {
    @Override
    @Query(
            "select x from #{#entityName} x where x.deleted = false "
                    + "and (cast(x.id as string) like :search "
                    + "or x.fileName like :search or x.contentType like :search or x.filePath like :search or cast(x.uploadTimestamp as string) like :search)")
    Page<File> findContaining(Pageable pageable, String search);


    @Query(
            "select x from #{#entityName} x where x.deleted = false and x.userId = :userId "
                    + "and (cast(x.id as string) like :search "
                    + "or x.fileName like :search or x.contentType like :search or x.filePath like :search or cast(x.uploadTimestamp as string) like :search)")
    Page<File> findByUserIdContaining(
            Long userId, Pageable pageable, String search);

    List<File> findByUserIdAndDeletedFalse(Long userId);
}
