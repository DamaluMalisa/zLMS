package com.zahara.lms.faculty.service;

import com.zahara.lms.faculty.dto.StudyProgramDTO;
import com.zahara.lms.faculty.mapper.StudyProgramMapper;
import com.zahara.lms.faculty.model.StudyProgram;
import com.zahara.lms.faculty.repository.FacultyRepository;
import com.zahara.lms.faculty.repository.StudyProgramRepository;
import com.zahara.lms.shared.exception.NotFoundException;
import com.zahara.lms.shared.service.BaseService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudyProgramService extends BaseService<StudyProgram, StudyProgramDTO, Long> {
    private final StudyProgramRepository repository;
    private final StudyProgramMapper mapper;
    private final FacultyRepository facultyRepository;

    public StudyProgramService(
            StudyProgramRepository repository,
            StudyProgramMapper mapper,
            FacultyRepository facultyRepository) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
        this.facultyRepository = facultyRepository;
    }

    public List<StudyProgramDTO> findByFacultyId(Long id) {
        if (!facultyRepository.existsById(id)) {
            throw new NotFoundException("Faculty not found");
        }
        return mapper.toDTO(repository.findByFacultyIdAndDeletedFalse(id));
    }
}
