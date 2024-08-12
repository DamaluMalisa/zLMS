package com.zahara.lms.faculty.controller;

import com.zahara.lms.faculty.dto.CityDTO;
import com.zahara.lms.faculty.model.City;
import com.zahara.lms.faculty.service.CityService;
import com.zahara.lms.shared.controller.BaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cities")
public class CityController extends BaseController<City, CityDTO, Long> {
    private final CityService service;

    public CityController(CityService service) {
        super(service);
        this.service = service;
    }
}
