package com.zahara.lms.assessment.client;

import com.zahara.lms.assessment.dto.BundleDTO;
import com.zahara.lms.assessment.dto.SubjectDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Set;

@FeignClient("subject-service")
public interface SubjectFeignClient {
    @GetMapping("/subjects/{id}")
    List<SubjectDTO> getSubject(@PathVariable Set<Long> id);

    @GetMapping("/bundles/{id}")
    List<BundleDTO> getBundle(@PathVariable Set<Long> id);

}
