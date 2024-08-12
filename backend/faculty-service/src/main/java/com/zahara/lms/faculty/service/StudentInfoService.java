package com.zahara.lms.faculty.service;


import com.zahara.lms.faculty.dto.StudentInfoDTO;
import com.zahara.lms.faculty.mapper.StudentInfoMapper;
import com.zahara.lms.faculty.model.StudentInfo;
import com.zahara.lms.faculty.repository.StudentInfoRepository;
import com.zahara.lms.shared.service.BaseService;
import org.springframework.stereotype.Service;

@Service
public class StudentInfoService extends BaseService<StudentInfo, StudentInfoDTO, Long> {
    private final StudentInfoRepository repository;
    private final StudentInfoMapper mapper;

    public StudentInfoService(StudentInfoRepository repository, StudentInfoMapper mapper) {
       super(repository, mapper);
       this.repository = repository;
       this.mapper = mapper;
    }
}
