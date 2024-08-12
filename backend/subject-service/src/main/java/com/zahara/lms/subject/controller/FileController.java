package com.zahara.lms.subject.controller;

import com.zahara.lms.shared.controller.BaseController;
import com.zahara.lms.subject.dto.FileDTO;
import com.zahara.lms.subject.model.File;
import com.zahara.lms.subject.service.FileService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/files")
public class FileController
        extends BaseController<File, FileDTO, Long> {
    private final FileService service;

    public FileController(FileService service) {
        super(service);
        this.service = service;
    }
    @PostMapping("/upload")
    public ResponseEntity<Map<String, String>> uploadFile(
            @RequestParam("file") MultipartFile file,
            @RequestParam("userId") long userId) {
        Map<String, String> response = new HashMap<>();
        try {
            String filePath = service.uploadFile(file, userId);
            response.put("status", "success");
            response.put("filePath", filePath);
            return ResponseEntity.ok().body(response);
        } catch (IOException e) {
            response.put("status", "error");
            response.put("message", "Failed to upload file: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }


    @GetMapping("/download/{id}")
    public ResponseEntity<StreamingResponseBody> downloadFile(@PathVariable("id") Long id) {
        try {
            return service.downloadFile(id);
        } catch (ResponseStatusException e) {
            return ResponseEntity.status(e.getStatus()).body(null);
        }
    }

    @GetMapping("/{fileId}/url")
    public ResponseEntity<String> getFileUrl(@PathVariable Long fileId) {
        String fileUrl = service.getFileUrl(fileId);
        return ResponseEntity.ok(fileUrl);
    }

    @GetMapping("/user/{id}/all")
    public ResponseEntity<List<FileDTO>> getByUserId(@PathVariable Long id) {
        return new ResponseEntity<>(this.service.findByUserId(id), HttpStatus.OK);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<Page<FileDTO>> getByUserId(
            @PathVariable Long id,
            Pageable pageable,
            @RequestParam(defaultValue = "") String search) {
        return new ResponseEntity<>(
                this.service.findByUserId(id, pageable, search), HttpStatus.OK);
    }
}
