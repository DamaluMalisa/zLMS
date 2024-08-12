package com.zahara.lms.faculty.controller;

import com.zahara.lms.faculty.dto.AddressDTO;
import com.zahara.lms.faculty.model.Address;
import com.zahara.lms.faculty.service.AddressService;
import com.zahara.lms.shared.controller.BaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/addresses")
public class AddressController extends BaseController<Address, AddressDTO, Long> {
    private final AddressService service;

    public AddressController(AddressService service) {
        super(service);
        this.service = service;
    }
}
