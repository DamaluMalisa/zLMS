package com.zahara.lms.auth.controller;

import com.zahara.lms.auth.model.Role;
import com.zahara.lms.auth.service.RoleService;
import com.zahara.lms.shared.controller.BaseController;
import com.zahara.lms.shared.dto.RoleDTO;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/roles")
public class RoleController extends BaseController<Role, RoleDTO, Long> {
    private final RoleService service;

    public RoleController(RoleService service) {
        super(service);
        this.service = service;
    }
}
