package com.zahara.lms.subject.service;

import com.zahara.lms.shared.exception.ForbiddenException;
import com.zahara.lms.shared.exception.NotFoundException;
import com.zahara.lms.shared.service.ExtendedService;
import com.zahara.lms.subject.client.FacultyFeignClient;
import com.zahara.lms.subject.dto.SubjectAnnouncementDTO;
import com.zahara.lms.subject.dto.SubjectDTO;
import com.zahara.lms.subject.dto.TeacherDTO;
import com.zahara.lms.subject.mapper.SubjectAnnouncementMapper;
import com.zahara.lms.subject.model.Subject;
import com.zahara.lms.subject.model.SubjectAnnouncement;
import com.zahara.lms.subject.repository.SubjectAnnouncementRepository;
import com.zahara.lms.subject.repository.SubjectRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

import static com.zahara.lms.shared.security.SecurityUtils.*;

@Service
public class SubjectAnnouncementService
        extends ExtendedService<SubjectAnnouncement, SubjectAnnouncementDTO, Long> {
    private final SubjectAnnouncementRepository repository;
    private final SubjectAnnouncementMapper mapper;
    private final SubjectRepository subjectRepository;
    private final FacultyFeignClient facultyFeignClient;

    public SubjectAnnouncementService(
            SubjectAnnouncementRepository repository,
            SubjectAnnouncementMapper mapper,
            SubjectRepository subjectRepository,
            FacultyFeignClient facultyFeignClient) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
        this.subjectRepository = subjectRepository;
        this.facultyFeignClient = facultyFeignClient;
    }

    @Override
    @Transactional
    public SubjectAnnouncementDTO save(SubjectAnnouncementDTO subjectAnnouncementDTO) {
        if (hasAuthority(ROLE_TEACHER)) {
            TeacherDTO teacher = facultyFeignClient.getTeacher(Set.of(getTeacherId())).get(0);
            SubjectDTO subject = subjectAnnouncementDTO.getSubject();
            if (!subject.getProfessor().getId().equals(teacher.getId())
                    && !subject.getAssistant().getId().equals(teacher.getId())) {
                throw new ForbiddenException(
                        "You are not allowed to manage this subject notification");
            }

            if (subjectAnnouncementDTO.getTeacher() == null) {
                subjectAnnouncementDTO.setTeacher(teacher);
            }
        }

        return super.save(subjectAnnouncementDTO);
    }

    @Override
    @Transactional
    public void delete(Set<Long> id) {
        if (hasAuthority(ROLE_TEACHER)) {
            Long teacherId = getTeacherId();
            List<SubjectAnnouncement> subjectAnnouncements =
                    (List<SubjectAnnouncement>) repository.findAllById(id);
            boolean forbidden =
                    subjectAnnouncements.stream()
                            .anyMatch(
                                    subjectNotification -> {
                                        Subject subject = subjectNotification.getSubject();
                                        return !subject.getProfessorId().equals(teacherId)
                                                && !subject.getAssistantId().equals(teacherId);
                                    });
            if (forbidden) {
                throw new ForbiddenException(
                        "You are not allowed to delete these subject notifications");
            }
        }

        super.delete(id);
    }

    @Override
    protected List<SubjectAnnouncementDTO> mapMissingValues(
            List<SubjectAnnouncementDTO> subjectAnnouncements) {
        map(
                subjectAnnouncements,
                SubjectAnnouncementDTO::getTeacher,
                SubjectAnnouncementDTO::setTeacher,
                facultyFeignClient::getTeacher);

        return subjectAnnouncements;
    }

    public List<SubjectAnnouncementDTO> findBySubjectId(Long id) {
        if (!subjectRepository.existsById(id)) {
            throw new NotFoundException("Subject not found");
        }

        List<SubjectAnnouncementDTO> subjectAnnouncements =
                mapper.toDTO(
                        repository.findBySubjectIdAndDeletedFalseOrderByTimestampDesc(id));
        return subjectAnnouncements.isEmpty()
                ? subjectAnnouncements
                : this.mapMissingValues(subjectAnnouncements);
    }

    public Page<SubjectAnnouncementDTO> findBySubjectId(Long id, Pageable pageable, String search) {
        if (!subjectRepository.existsById(id)) {
            throw new NotFoundException("Subject not found");
        }

        Page<SubjectAnnouncementDTO> subjectAnnouncements =
                repository
                        .findBySubjectIdContaining(id, pageable, "%" + search + "%")
                        .map(mapper::toDTO);
        return subjectAnnouncements.getContent().isEmpty()
                ? subjectAnnouncements
                : new PageImpl<>(
                        this.mapMissingValues(subjectAnnouncements.getContent()),
                        pageable,
                subjectAnnouncements.getTotalElements());
    }
}
