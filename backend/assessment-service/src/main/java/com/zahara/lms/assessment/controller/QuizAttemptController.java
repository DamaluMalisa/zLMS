package com.zahara.lms.assessment.controller;

import com.zahara.lms.assessment.dto.QuestionAnswerDTO;
import com.zahara.lms.assessment.dto.QuizAttemptDTO;
import com.zahara.lms.assessment.dto.QuizDTO;
import com.zahara.lms.assessment.dto.StudentDTO;
import com.zahara.lms.assessment.service.QuizAttemptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quiz-attempts")
public class QuizAttemptController {

    @Autowired
    private QuizAttemptService quizAttemptService;

    @PostMapping("/start/{studentId}/{quizId}")
    public ResponseEntity<QuizAttemptDTO> startQuizAttempt(@PathVariable Long studentId, @PathVariable Long quizId) {
        QuizAttemptDTO quizAttempt = quizAttemptService.startQuizAttempt(studentId, quizId);
        return ResponseEntity.ok(quizAttempt);
    }


    @GetMapping("/student/{studentId}")
    public ResponseEntity<List<QuizAttemptDTO>> getQuizAttemptsByStudent(@PathVariable Long studentId) {
        List<QuizAttemptDTO> quizAttempts = quizAttemptService.getQuizAttemptsByStudent(studentId);
        return ResponseEntity.ok(quizAttempts);
    }

    @GetMapping("/quiz/{quizId}/all")
    public ResponseEntity<List<QuizAttemptDTO>> getByQuizId(@PathVariable Long quizId) {
        List<QuizAttemptDTO> quizAttempts = quizAttemptService.findByQuizId(quizId);
        return ResponseEntity.ok(quizAttempts);
    }

    @GetMapping("/quiz/{quizId}")
    public ResponseEntity<Page<QuizAttemptDTO>> getByQuizId(@PathVariable Long quizId, Pageable pageable, @RequestParam String search) {
        Page<QuizAttemptDTO> quizAttempts = quizAttemptService.findByQuizId(quizId, pageable, search);
        return ResponseEntity.ok(quizAttempts);
    }
}
