package com.zahara.lms.faculty.controller;

import com.zahara.lms.faculty.dto.CountryDTO;
import com.zahara.lms.faculty.model.Country;
import com.zahara.lms.faculty.service.CountryService;
import com.zahara.lms.shared.controller.BaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/countries")
public class CountryController extends BaseController<Country, CountryDTO, Long> {
    private final CountryService service;

    public CountryController(CountryService service) {
        super(service);
        this.service = service;
    }
}
