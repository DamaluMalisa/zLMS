package com.zahara.lms.auth.controller;

import com.zahara.lms.auth.dto.TokensDTO;
import com.zahara.lms.auth.service.UserService;
import com.zahara.lms.shared.dto.UserDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
public class AuthController {
    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<TokensDTO> login(@Valid @RequestBody UserDTO userDTO) {
        return new ResponseEntity<>(userService.login(userDTO), HttpStatus.OK);
    }

    @GetMapping("/refresh")
    public ResponseEntity<TokensDTO> refresh(
            @RequestHeader(HttpHeaders.AUTHORIZATION) String refreshToken) {
        return new ResponseEntity<>(userService.refresh(refreshToken), HttpStatus.OK);
    }
}
