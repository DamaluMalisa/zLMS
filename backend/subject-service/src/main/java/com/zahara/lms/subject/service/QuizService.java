package com.zahara.lms.subject.service;

import com.zahara.lms.shared.exception.ForbiddenException;
import com.zahara.lms.shared.exception.NotFoundException;
import com.zahara.lms.shared.service.ExtendedService;
import com.zahara.lms.subject.client.FacultyFeignClient;
import com.zahara.lms.subject.dto.*;
import com.zahara.lms.subject.dto.QuizDTO;
import com.zahara.lms.subject.mapper.QuizMapper;
import com.zahara.lms.subject.model.Quiz;
import com.zahara.lms.subject.model.Subject;
import com.zahara.lms.subject.repository.BundleRepository;
import com.zahara.lms.subject.repository.QuizRepository;
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
public class QuizService  extends ExtendedService<Quiz, QuizDTO, Long> {
    private final QuizRepository repository;
    private final QuizMapper mapper;
    private final BundleRepository bundleRepository;
    private final SubjectRepository subjectRepository;
    private final FacultyFeignClient facultyFeignClient;

    public QuizService(
            QuizRepository repository,
            QuizMapper mapper,
            BundleRepository bundleRepository,
            SubjectRepository subjectRepository,
            FacultyFeignClient facultyFeignClient) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
        this.bundleRepository = bundleRepository;
        this.facultyFeignClient = facultyFeignClient;
        this.subjectRepository = subjectRepository;
    }

    @Override
    @Transactional
    public QuizDTO save(QuizDTO fileDTO) {
        if (hasAuthority(ROLE_TEACHER)) {
            TeacherDTO teacher = facultyFeignClient.getTeacher(Set.of(getTeacherId())).get(0);
            SubjectDTO subject = fileDTO.getSubject();
            if (!subject.getProfessor().getId().equals(teacher.getId())
                    && !subject.getAssistant().getId().equals(teacher.getId())) {
                throw new ForbiddenException(
                        "You are not allowed manage this Quiz");
            }

            if (fileDTO.getTeacher() == null) {
                fileDTO.setTeacher(teacher);
            }
        }

        return super.save(fileDTO);
    }

    @Override
    @Transactional
    public void delete(Set<Long> id) {
        if (hasAuthority(ROLE_TEACHER)) {
            Long teacherId = getTeacherId();
            List<Quiz> quizzes =
                    (List<Quiz>) repository.findAllById(id);
            boolean forbidden =
                    quizzes.stream()
                            .anyMatch(
                                    file -> {
                                        Subject subject = file.getBundle().getSubject();
                                        return !subject.getProfessorId().equals(teacherId)
                                                && !subject.getAssistantId().equals(teacherId);
                                    });
            if (forbidden) {
                throw new ForbiddenException(
                        "You are not allowed to delete these Quiz");
            }
        }

        super.delete(id);
    }


    @Override
    protected List<QuizDTO> mapMissingValues(List<QuizDTO> quizzes) {
        map(
                quizzes,
                QuizDTO::getTeacher,
                QuizDTO::setTeacher,
                facultyFeignClient::getTeacher);

        return quizzes;
    }


    public List<QuizDTO> findByBundleId(Long id) {
        if (!bundleRepository.existsById(id)) {
            throw new NotFoundException("Bundle not found");
        }

        List<QuizDTO> quizzes =
                mapper.toDTO(
                        repository.findByBundleIdAndDeletedFalseOrderByTimestampDesc(id));
        return quizzes.isEmpty()
                ? quizzes
                : this.mapMissingValues(quizzes);
    }

    public Page<QuizDTO> findByBundleId(Long id, Pageable pageable, String search) {
        if (!bundleRepository.existsById(id)) {
            throw new NotFoundException("Bundle not found");
        }

        Page<QuizDTO> quizzes =
                repository
                        .findByBundleIdContaining(id, pageable, "%" + search + "%")
                        .map(mapper::toDTO);
        return quizzes.getContent().isEmpty()
                ? quizzes
                : new PageImpl<>(
                this.mapMissingValues(quizzes.getContent()),
                pageable,
                quizzes.getTotalElements());
    }

    public List<QuizDTO> findBySubjectId(Long id) {
        if (!subjectRepository.existsById(id)) {
            throw new NotFoundException("Bundle not found");
        }

        List<QuizDTO> pages =
                mapper.toDTO(
                        repository.findBySubjectIdAndDeletedFalseOrderByTimestampDesc(id));
        return pages.isEmpty()
                ? pages
                : this.mapMissingValues(pages);
    }

    public Page<QuizDTO> findBySubjectId(Long id, Pageable pageable, String search) {
        if (!subjectRepository.existsById(id)) {
            throw new NotFoundException("Bundle not found");
        }

        Page<QuizDTO> pages =
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
