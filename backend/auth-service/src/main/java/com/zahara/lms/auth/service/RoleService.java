package com.zahara.lms.auth.service;

import com.zahara.lms.auth.mapper.RoleMapper;
import com.zahara.lms.auth.model.Role;
import com.zahara.lms.auth.repository.RoleRepository;
import com.zahara.lms.shared.dto.RoleDTO;
import com.zahara.lms.shared.service.BaseService;
import org.springframework.stereotype.Service;

@Service
public class RoleService extends BaseService<Role, RoleDTO, Long> {
    private final RoleRepository repository;
    private final RoleMapper mapper;

    public RoleService(RoleRepository repository, RoleMapper mapper) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
    }
}
