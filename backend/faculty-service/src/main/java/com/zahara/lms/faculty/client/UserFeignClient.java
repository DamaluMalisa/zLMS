package com.zahara.lms.faculty.client;

import com.zahara.lms.shared.dto.UserDTO;
import com.zahara.lms.shared.dto.UserDetailsDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@FeignClient(name = "auth-service", contextId = "userFeignClient")
public interface UserFeignClient {
    @GetMapping("/users/{id}/public")
    List<UserDTO> getUser(@PathVariable Set<Long> id);

    @PostMapping("/users")
    UserDTO createUser(UserDetailsDTO user);

    @PatchMapping("/users/{id}")
    UserDTO patchUser(@PathVariable Long id, UserDTO user);

    @DeleteMapping("/users/{id}")
    void deleteUser(@PathVariable Set<Long> id);
}
