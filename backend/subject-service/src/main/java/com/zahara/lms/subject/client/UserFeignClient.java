package com.zahara.lms.subject.client;

import com.zahara.lms.shared.dto.UserDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@FeignClient(name = "auth-service", contextId = "userFeignClient")
public interface UserFeignClient {
    @GetMapping("/users/{id}/public")
    List<UserDTO> getUser(@PathVariable Set<Long> id);
}
