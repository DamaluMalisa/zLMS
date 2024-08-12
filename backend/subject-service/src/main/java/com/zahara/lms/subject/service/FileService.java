package com.zahara.lms.subject.service;

import com.zahara.lms.shared.dto.UserDTO;
import com.zahara.lms.shared.exception.NotFoundException;
import com.zahara.lms.shared.service.ExtendedService;
import com.zahara.lms.subject.client.UserFeignClient;
import com.zahara.lms.subject.dto.FileDTO;
import com.zahara.lms.subject.mapper.FileMapper;
import com.zahara.lms.subject.model.File;
import com.zahara.lms.subject.repository.FileRepository;
import org.apache.tika.Tika;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;

import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.Set;

import static com.zahara.lms.subject.util.Utility.generateUniqueFileName;

@Service
public class FileService  extends ExtendedService<File, FileDTO, Long> {

    @Value("${file.upload-dir}")
    private String uploadDir;
    private final Tika tika = new Tika();
    private final FileRepository repository;
    private final FileMapper mapper;
    private final UserFeignClient userFeignClient;



    public FileService(
            FileRepository repository,
            FileMapper mapper,
            UserFeignClient userFeignClient) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
        this.userFeignClient = userFeignClient;
    }

    @Transactional
    public String uploadFile(MultipartFile file, Long userId) throws IOException {
        if (userId == null) {
            throw new IllegalArgumentException("User ID cannot be null or empty");
        }

        Set<Long> userIdSet = Collections.singleton(userId);

        UserDTO userResponse = null;
        List<UserDTO> userResponseList = userFeignClient.getUser(userIdSet);
        if (!userResponseList.isEmpty()) {
            userResponse = userResponseList.get(0); // Retrieve the first element
        } else {
            throw new RuntimeException("User not found for ID: " + userId);
        }

        if (userResponse == null) {
             throw new RuntimeException("User not found for ID: " + userId);
         }

        Path uploadPath = Paths.get(uploadDir);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        String fileName = file.getOriginalFilename();
        if (fileName == null || fileName.isEmpty()) {
            fileName = generateUniqueFileName();
        }

        String contentType = file.getContentType();
        if (contentType == null || contentType.isBlank() || contentType.equals("application/octet-stream")) {
            contentType = tika.detect(file.getInputStream());
        }

        Path filePath = uploadPath.resolve(fileName);
        file.transferTo(filePath);

        FileDTO fileDTO = new FileDTO();
        fileDTO.setFileName(fileName);
        fileDTO.setContentType(contentType);
        fileDTO.setFilePath(filePath.toString());
        fileDTO.setUploadTimestamp(LocalDateTime.now());
        fileDTO.setUser(userResponse);

        super.save(fileDTO);
        return filePath.toString();
    }




    public ResponseEntity<StreamingResponseBody> downloadFile(Long id) {
        File fileEntity = repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "File not found with ID: " + id));

        FileDTO fileDTO = mapper.toDTO(fileEntity);

        FileSystemResource fileResource = new FileSystemResource(fileDTO.getFilePath());
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        headers.setContentDispositionFormData("attachment", fileDTO.getFileName());

        StreamingResponseBody responseBody = outputStream -> {
            try (FileInputStream inputStream = new FileInputStream(fileResource.getFile())) {
                byte[] buffer = new byte[1024];
                int bytesRead;
                while ((bytesRead = inputStream.read(buffer)) != -1) {
                    outputStream.write(buffer, 0, bytesRead);
                }
            } catch (IOException e) {
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Failed to stream file: " + e.getMessage());
            }
        };

        return ResponseEntity.ok()
                .headers(headers)
                .body(responseBody);
    }

    public String getFileUrl(Long fileId) {
        File fileEntity = repository.findById(fileId)
                .orElseThrow(() -> new NotFoundException("File not found with ID: " + fileId));

        // Assuming you have a base URL where files are hosted
        String baseUrl = "http://yourdomain.com/files/";

        // Append the file ID to the base URL to create the file URL
        return baseUrl + fileEntity.getId();
    }




    @Override
    protected List<FileDTO> mapMissingValues(List<FileDTO> files) {
        map(files, FileDTO::getUser, FileDTO::setUser, userFeignClient::getUser);
        return files;
    }


    public List<FileDTO> findByUserId(Long id) {
//        if (!subjectRepository.existsById(id)) {
//            throw new NotFoundException("Bundle not found");
//        }
        List<FileDTO> files =
                mapper.toDTO(
                        repository.findByUserIdAndDeletedFalse(id));
        return files.isEmpty()
                ? files
                : this.mapMissingValues(files);
    }

    public Page<FileDTO> findByUserId(Long id, Pageable pageable, String search) {
//        if (!subjectRepository.existsById(id)) {
//            throw new NotFoundException("Bundle not found");
//        }

        Page<FileDTO> files =
                repository
                        .findByUserIdContaining(id, pageable, "%" + search + "%")
                        .map(mapper::toDTO);
        return files.getContent().isEmpty()
                ? files
                : new PageImpl<>(
                this.mapMissingValues(files.getContent()),
                pageable,
                files.getTotalElements());
    }
}
