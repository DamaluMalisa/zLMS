package com.zahara.lms.subject.service;

import com.zahara.lms.shared.exception.NotFoundException;
import com.zahara.lms.shared.service.ExtendedService;
import com.zahara.lms.subject.client.FacultyFeignClient;
import com.zahara.lms.subject.dto.AnnouncementCommentDTO;
import com.zahara.lms.subject.mapper.AnnouncementCommentMapper;
import com.zahara.lms.subject.model.AnnouncementComment;
import com.zahara.lms.subject.repository.AnnouncementCommentRepository;
import com.zahara.lms.subject.repository.SubjectAnnouncementRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnnouncementCommentService   extends ExtendedService<AnnouncementComment, AnnouncementCommentDTO, Long> {
    private final AnnouncementCommentRepository repository;
    private final AnnouncementCommentMapper mapper;
    private final FacultyFeignClient facultyFeignClient;
    private final SubjectAnnouncementRepository subjectAnnouncementRepository;

    public AnnouncementCommentService (
            AnnouncementCommentRepository repository,
            AnnouncementCommentMapper mapper,
            SubjectAnnouncementRepository subjectAnnouncementRepository,
            FacultyFeignClient facultyFeignClient) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
        this.subjectAnnouncementRepository = subjectAnnouncementRepository;
        this.facultyFeignClient = facultyFeignClient;
    }

    @Override
    protected List<AnnouncementCommentDTO> mapMissingValues(
            List<AnnouncementCommentDTO> AnnouncementComments) {
        map(
                AnnouncementComments,
                AnnouncementCommentDTO::getStudent,
                AnnouncementCommentDTO::setStudent,
                facultyFeignClient::getStudent);
        return AnnouncementComments;
    }

    public List<AnnouncementCommentDTO> findBySubjectAnnouncementId(Long id) {
        if (!subjectAnnouncementRepository.existsById(id)) {
            throw new NotFoundException("Subject not found");
        }

        List<AnnouncementCommentDTO> announcementComments =
                mapper.toDTO(
                        repository.findBySubjectAnnouncementIdAndDeletedFalseOrderByTimestampDesc(id));
        return announcementComments.isEmpty()
                ? announcementComments
                : this.mapMissingValues(announcementComments);
    }

    public Page<AnnouncementCommentDTO> findBySubjectAnnouncementId(Long id, Pageable pageable, String search) {
        if (!subjectAnnouncementRepository.existsById(id)) {
            throw new NotFoundException("Subject not found");
        }

        Page<AnnouncementCommentDTO> announcementComments =
                repository
                        .findBySubjectAnnouncementIdContaining(id, pageable, "%" + search + "%")
                        .map(mapper::toDTO);
        return announcementComments.getContent().isEmpty()
                ? announcementComments
                : new PageImpl<>(
                this.mapMissingValues(announcementComments.getContent()),
                pageable,
                announcementComments.getTotalElements());
    }
}
