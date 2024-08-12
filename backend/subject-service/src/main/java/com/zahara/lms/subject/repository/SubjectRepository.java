package com.zahara.lms.subject.repository;

import com.zahara.lms.shared.repository.BaseRepository;
import com.zahara.lms.subject.model.Subject;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubjectRepository extends BaseRepository<Subject, Long> {
    @Override
    @Query(
            "select x from #{#entityName} x where x.deleted = false "
                    + "and (cast(x.id as string) like :search or x.name like :search "
                    + "or x.description like :search or cast(x.semester as string) like :search "
                    + "or cast(x.credits as string) like :search "
                    + "or cast(x.ects as string) like :search "
                    + "or x.status like :search or x.tasks like :search "
                    + "or cast(x.progress as string) like :search "
                    + "or cast(x.startDate as string) like :search "
                    + "or cast(x.endDate as string) like :search "
                    + "or cast(x.studyProgramId as string) like :search "
                    + "or cast(x.professorId as string) like :search "
                    + "or cast(x.assistantId as string) like :search)")
    Page<Subject> findContaining(Pageable pageable, String search);

    List<Subject> findByStudyProgramIdAndDeletedFalseOrderBySemesterAscNameAsc(Long id);

    List<Subject> findByProfessorIdOrAssistantIdAndDeletedFalseOrderBySemesterAscNameAsc(
            Long professorId, Long assistantId);

    List<Subject> findBySubjectEnrollmentsStudentIdAndDeletedFalse(Long studentId);
}
