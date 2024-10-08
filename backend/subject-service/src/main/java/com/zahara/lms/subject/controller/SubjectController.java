package com.zahara.lms.subject.controller;

import com.zahara.lms.shared.controller.BaseController;
import com.zahara.lms.subject.dto.SubjectDTO;
import com.zahara.lms.subject.model.Subject;
import com.zahara.lms.subject.service.SubjectService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/subjects")
public class SubjectController extends BaseController<Subject, SubjectDTO, Long> {
    private final SubjectService service;

    public SubjectController(SubjectService service) {
        super(service);
        this.service = service;
    }

    @GetMapping("/study-program/{id}/all")
    public ResponseEntity<List<SubjectDTO>> getByStudyProgramId(@PathVariable Long id) {
        return new ResponseEntity<>(this.service.findByStudyProgramId(id), HttpStatus.OK);
    }

    @GetMapping("/teacher/{id}/all")
    public ResponseEntity<List<SubjectDTO>> getByTeacherId(@PathVariable Long id) {
        return new ResponseEntity<>(this.service.findByTeacherId(id), HttpStatus.OK);
    }

    @GetMapping("/student/{id}/all")
    public ResponseEntity<List<SubjectDTO>> getByStudentId(@PathVariable Long id) {
        return new ResponseEntity<>(this.service.findByStudentId(id), HttpStatus.OK);
    }

    @PatchMapping("/{id}/syllabus")
    public ResponseEntity<SubjectDTO> patchDescription(
            @PathVariable Long id, @RequestBody String description) {
        return new ResponseEntity<>(this.service.updateDescription(id, description), HttpStatus.OK);
    }
}
