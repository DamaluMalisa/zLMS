package com.zahara.lms.subject.controller;

import com.zahara.lms.shared.controller.BaseController;
import com.zahara.lms.subject.dto.AnnouncementCommentDTO;
import com.zahara.lms.subject.model.AnnouncementComment;
import com.zahara.lms.subject.service.AnnouncementCommentService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/announcement-comments")
public class AnnouncementCommentController extends BaseController<AnnouncementComment, AnnouncementCommentDTO, Long> {
        private final AnnouncementCommentService service;

    public AnnouncementCommentController(AnnouncementCommentService service) {
        super(service);
        this.service = service;
    }

        @GetMapping("/subject-announcement/{id}/all")
        public ResponseEntity<List<AnnouncementCommentDTO>> getBySubjectAnnouncementId(@PathVariable Long id) {
        return new ResponseEntity<>(this.service.findBySubjectAnnouncementId(id), HttpStatus.OK);
    }

        @GetMapping("/subject-announcement/{id}")
        public ResponseEntity<Page<AnnouncementCommentDTO>> getBySubjectAnnouncementId(
            @PathVariable Long id,
            Pageable pageable,
            @RequestParam(defaultValue = "") String search) {
        return new ResponseEntity<>(
                this.service.findBySubjectAnnouncementId(id, pageable, search), HttpStatus.OK);
    }
}
