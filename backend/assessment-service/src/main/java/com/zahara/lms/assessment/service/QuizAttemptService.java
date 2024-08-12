package com.zahara.lms.assessment.service;

import com.zahara.lms.assessment.client.FacultyFeignClient;
import com.zahara.lms.assessment.dto.QuestionAnswerDTO;
import com.zahara.lms.assessment.dto.QuizAttemptDTO;
import com.zahara.lms.assessment.dto.QuizDTO;
import com.zahara.lms.assessment.dto.StudentDTO;
import com.zahara.lms.assessment.mapper.QuizAttemptMapper;
import com.zahara.lms.assessment.mapper.QuizMapper;
import com.zahara.lms.assessment.model.Quiz;
import com.zahara.lms.assessment.model.QuizAttempt;
import com.zahara.lms.assessment.repository.QuizAttemptRepository;
import com.zahara.lms.assessment.repository.QuizRepository;
import com.zahara.lms.shared.service.ExtendedService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class QuizAttemptService extends ExtendedService<QuizAttempt, QuizAttemptDTO, Long> {

    private final QuizAttemptRepository repository;
    private final QuizAttemptMapper mapper;
    private final FacultyFeignClient facultyFeignClient;
    private final QuizMapper quizMapper;
    private final QuizService quizService;
    private final QuizRepository quizRepository;
    private final QuestionAnswerService questionAnswerService;

    public QuizAttemptService(QuizAttemptRepository repository,
                              QuizAttemptMapper mapper,
                              FacultyFeignClient facultyFeignClient,
                              QuizMapper quizMapper,
                              QuizService quizService,
                              QuizRepository quizRepository,
                              QuestionAnswerService questionAnswerService) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
        this.facultyFeignClient = facultyFeignClient;
        this.quizMapper = quizMapper;
        this.quizService = quizService;
        this.quizRepository = quizRepository;
        this.questionAnswerService = questionAnswerService;
    }

    @Override
    protected List<QuizAttemptDTO> mapMissingValues(List<QuizAttemptDTO> quizAttempts) {
        map(quizAttempts, QuizAttemptDTO::getStudent, QuizAttemptDTO::setStudent, facultyFeignClient::getStudent);
        return quizAttempts;
    }

    @Transactional
    public QuizAttemptDTO startQuizAttempt(Long studentId, Long quizId) {
        QuizAttempt quizAttempt = new QuizAttempt();
        quizAttempt.setStudentId(studentId);
//        Quiz quiz = (Quiz) quizService.findById(Collections.singleton(quizId));
        List<QuizDTO> quizzes = quizService.findById(Collections.singleton(quizId));
        if (!quizzes.isEmpty()) {
            quizAttempt.setQuiz(quizMapper.toModel(quizzes.get(0)));
        }
//        quizAttempt.setQuiz(quizMapper.toModel(quiz));
        quizAttempt.setQuestionAnswers(List.of());
        quizAttempt.setScore(0);
        return mapper.toDTO(repository.save(quizAttempt));
    }

    public List<QuizAttemptDTO> getQuizAttemptsByStudent(Long id) {
        return repository.findByStudentIdAndDeletedFalse(id).stream()
                .map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    public List<QuizAttemptDTO> findByQuizId(Long id) {
        List<QuizAttemptDTO> quizAttempts = mapper.toDTO(repository.findByQuizIdAndDeletedFalse(id));
        return quizAttempts.isEmpty() ? quizAttempts : this.mapMissingValues(quizAttempts);
    }

    public Page<QuizAttemptDTO> findByQuizId(Long id, Pageable pageable, String search) {
        Page<QuizAttemptDTO> quizAttempts = repository.findByQuizIdContaining(id, pageable, "%" + search + "%").map(mapper::toDTO);
        return quizAttempts.getContent().isEmpty() ? quizAttempts : new PageImpl<>(this.mapMissingValues(quizAttempts.getContent()), pageable, quizAttempts.getTotalElements());
    }
}
