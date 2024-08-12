package com.zahara.lms.subject.service;

import com.zahara.lms.shared.exception.ForbiddenException;
import com.zahara.lms.shared.exception.NotFoundException;
import com.zahara.lms.shared.service.ExtendedService;
import com.zahara.lms.subject.client.FacultyFeignClient;
import com.zahara.lms.subject.dto.*;
import com.zahara.lms.subject.dto.PageDTO;
import com.zahara.lms.subject.mapper.PageMapper;
import com.zahara.lms.subject.model.Page;
import com.zahara.lms.subject.model.Subject;
import com.zahara.lms.subject.repository.BundleRepository;
import com.zahara.lms.subject.repository.PageRepository;
import com.zahara.lms.subject.repository.SubjectRepository;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

import static com.zahara.lms.shared.security.SecurityUtils.*;
import static com.zahara.lms.shared.security.SecurityUtils.getTeacherId;

@Service
public class PageService  extends ExtendedService<Page, PageDTO, Long> {
    private final PageRepository repository;
    private final PageMapper mapper;
    private final BundleRepository bundleRepository;

    private final SubjectRepository subjectRepository;
    private final FacultyFeignClient facultyFeignClient;

    public PageService(
            PageRepository repository,
            PageMapper mapper,
            BundleRepository bundleRepository,
            SubjectRepository subjectRepository,
            FacultyFeignClient facultyFeignClient) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
        this.bundleRepository = bundleRepository;
        this.subjectRepository = subjectRepository;
        this.facultyFeignClient = facultyFeignClient;
    }

    @Override
    @Transactional
    public PageDTO save(PageDTO pageDTO) {
        if (hasAuthority(ROLE_TEACHER)) {
            TeacherDTO teacher = facultyFeignClient.getTeacher(Set.of(getTeacherId())).get(0);
            SubjectDTO subject = pageDTO.getSubject();
            if (!subject.getProfessor().getId().equals(teacher.getId())
                    && !subject.getAssistant().getId().equals(teacher.getId())) {
                throw new ForbiddenException(
                        "You are not allowed manage this Page");
            }

            if (pageDTO.getTeacher() == null) {
                pageDTO.setTeacher(teacher);
            }
        }

        return super.save(pageDTO);
    }

    @Override
    @Transactional
    public void delete(Set<Long> id) {
        if (hasAuthority(ROLE_TEACHER)) {
            Long teacherId = getTeacherId();
            List<Page> pages =
                    (List<Page>) repository.findAllById(id);
            boolean forbidden =
                    pages.stream()
                            .anyMatch(
                                    page -> {
                                        Subject subject = page.getBundle().getSubject();
                                        return !subject.getProfessorId().equals(teacherId)
                                                && !subject.getAssistantId().equals(teacherId);
                                    });
            if (forbidden) {
                throw new ForbiddenException(
                        "You are not allowed to delete these subject materials");
            }
        }

        super.delete(id);
    }


    @Override
    protected List<PageDTO> mapMissingValues(List<PageDTO> pages) {
        map(
                pages,
                PageDTO::getTeacher,
                PageDTO::setTeacher,
                facultyFeignClient::getTeacher);

        return pages;
    }


    public List<PageDTO> findByBundleId(Long id) {
        if (!bundleRepository.existsById(id)) {
            throw new NotFoundException("Bundle not found");
        }

        List<PageDTO> pages =
                mapper.toDTO(
                        repository.findByBundleIdAndDeletedFalseOrderByTimestampDesc(id));
        return pages.isEmpty()
                ? pages
                : this.mapMissingValues(pages);
    }

    public org.springframework.data.domain.Page<PageDTO> findByBundleId(Long id, Pageable pageable, String search) {
        if (!bundleRepository.existsById(id)) {
            throw new NotFoundException("Bundle not found");
        }

        org.springframework.data.domain.Page<PageDTO> pages =
                repository
                        .findByBundleIdContaining(id, pageable, "%" + search + "%")
                        .map(mapper::toDTO);
        return pages.getContent().isEmpty()
                ? pages
                : new PageImpl<>(
                this.mapMissingValues(pages.getContent()),
                pageable,
                pages.getTotalElements());
    }

    public List<PageDTO> findBySubjectId(Long id) {
        if (!subjectRepository.existsById(id)) {
            throw new NotFoundException("Bundle not found");
        }

        List<PageDTO> pages =
                mapper.toDTO(
                        repository.findBySubjectIdAndDeletedFalseOrderByTimestampDesc(id));
        return pages.isEmpty()
                ? pages
                : this.mapMissingValues(pages);
    }

    public org.springframework.data.domain.Page<PageDTO> findBySubjectId(Long id, Pageable pageable, String search) {
        if (!subjectRepository.existsById(id)) {
            throw new NotFoundException("Bundle not found");
        }

        org.springframework.data.domain.Page<PageDTO> pages =
                repository
                        .findBySubjectIdContaining(id, pageable, "%" + search + "%")
                        .map(mapper::toDTO);
        return pages.getContent().isEmpty()
                ? pages
                : new PageImpl<>(
                this.mapMissingValues(pages.getContent()),
                pageable,
                pages.getTotalElements());
    }
}
