package com.zahara.lms.subject.service;

import com.zahara.lms.shared.exception.ForbiddenException;
import com.zahara.lms.shared.exception.NotFoundException;
import com.zahara.lms.shared.service.ExtendedService;
import com.zahara.lms.subject.client.FacultyFeignClient;
import com.zahara.lms.subject.dto.*;
import com.zahara.lms.subject.dto.BundleDTO;
import com.zahara.lms.subject.mapper.BundleMapper;
import com.zahara.lms.subject.model.Bundle;
import com.zahara.lms.subject.model.Subject;
import com.zahara.lms.subject.repository.BundleRepository;
import com.zahara.lms.subject.repository.SubjectRepository;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

import static com.zahara.lms.shared.security.SecurityUtils.*;
import static com.zahara.lms.shared.security.SecurityUtils.getTeacherId;

@Service
public class BundleService  extends ExtendedService<Bundle, BundleDTO, Long> {
    private final BundleRepository repository;
    private final BundleMapper mapper;
    private final SubjectRepository subjectRepository;
    private final FacultyFeignClient facultyFeignClient;

    public BundleService(
            BundleRepository repository,
            BundleMapper mapper,
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
    public BundleDTO save(BundleDTO bundleDTO) {
        if (hasAuthority(ROLE_TEACHER)) {
            TeacherDTO teacher = facultyFeignClient.getTeacher(Set.of(getTeacherId())).get(0);
            SubjectDTO subject = bundleDTO.getSubject();
            if (!subject.getProfessor().getId().equals(teacher.getId())
                    && !subject.getAssistant().getId().equals(teacher.getId())) {
                throw new ForbiddenException(
                        "You are not allowed manage this Bundle");
            }

            if (bundleDTO.getTeacher() == null) {
                bundleDTO.setTeacher(teacher);
            }
        }

        return super.save(bundleDTO);
    }

    @Override
    @Transactional
    public void delete(Set<Long> id) {
        if (hasAuthority(ROLE_TEACHER)) {
            Long teacherId = getTeacherId();
            List<Bundle> bundles =
                    (List<Bundle>) repository.findAllById(id);
            boolean forbidden =
                    bundles.stream()
                            .anyMatch(
                                    bundle -> {
                                        Subject subject = bundle.getSubject();
                                        return !subject.getProfessorId().equals(teacherId)
                                                && !subject.getAssistantId().equals(teacherId);
                                    });
            if (forbidden) {
                throw new ForbiddenException(
                        "You are not allowed to delete these Bundle");
            }
        }

        super.delete(id);
    }


    @Override
    protected List<BundleDTO> mapMissingValues(List<BundleDTO> bundles) {
        map(
                bundles,
                BundleDTO::getTeacher,
                BundleDTO::setTeacher,
                facultyFeignClient::getTeacher);

        return bundles;
    }


    public List<BundleDTO> findBySubjectId(Long id) {
        if (!subjectRepository.existsById(id)) {
            throw new NotFoundException("Subject not found");
        }

        List<BundleDTO> bundles =
                mapper.toDTO(
                        repository.findBySubjectIdAndDeletedFalseOrderByTimestampDesc(id));
        return bundles.isEmpty()
                ? bundles
                : this.mapMissingValues(bundles);
    }

    public Page<BundleDTO> findBySubjectId(Long id, Pageable pageable, String search) {
        if (!subjectRepository.existsById(id)) {
            throw new NotFoundException("Subject not found");
        }

        Page<BundleDTO> bundles =
                repository
                        .findBySubjectIdContaining(id, pageable, "%" + search + "%")
                        .map(mapper::toDTO);
        return bundles.getContent().isEmpty()
                ? bundles
                : new PageImpl<>(
                this.mapMissingValues(bundles.getContent()),
                pageable,
                bundles.getTotalElements());
    }

    public List<BundleDTO> findByTeacherId(Long id) {
        List<BundleDTO> bundles =
                mapper.toDTO(
                        repository.findByTeacherIdAndDeletedFalseOrderByTimestampDesc(id));
        return bundles.isEmpty()
                ? bundles
                : this.mapMissingValues(bundles);
    }
}
