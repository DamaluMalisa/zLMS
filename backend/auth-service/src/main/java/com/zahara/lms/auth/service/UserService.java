package com.zahara.lms.auth.service;

import com.zahara.lms.auth.dto.TokensDTO;
import com.zahara.lms.auth.mapper.UserMapper;
import com.zahara.lms.auth.model.User;
import com.zahara.lms.auth.repository.UserRepository;
import com.zahara.lms.auth.security.TokenGenerator;
import com.zahara.lms.shared.dto.UserDTO;
import com.zahara.lms.shared.dto.UserDetailsDTO;
import com.zahara.lms.shared.exception.ForbiddenException;
import com.zahara.lms.shared.exception.NotFoundException;
import com.zahara.lms.shared.service.BaseService;
import org.jetbrains.annotations.NotNull;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.regex.Pattern;

import java.util.List;
import java.util.Set;

import static com.zahara.lms.shared.security.SecurityUtils.*;

@Service
public class UserService extends BaseService<User, UserDetailsDTO, Long> {
    private final UserRepository repository;
    private final UserMapper mapper;
    private final UserDetailsService userDetailsService;
    private final TokenGenerator tokenGenerator;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;

    public UserService(
            UserRepository repository,
            UserMapper mapper,
            UserDetailsService userDetailsService,
            TokenGenerator tokenGenerator,
            AuthenticationManager authenticationManager,
            PasswordEncoder passwordEncoder) {
        super(repository, mapper);
        this.repository = repository;
        this.mapper = mapper;
        this.userDetailsService = userDetailsService;
        this.tokenGenerator = tokenGenerator;
        this.authenticationManager = authenticationManager;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    @Transactional
    public UserDetailsDTO save(UserDetailsDTO userDetailsDTO) {
        userDetailsDTO.setPassword(passwordEncoder.encode(userDetailsDTO.getPassword()));
        userDetailsDTO.setAccountNonExpired(true);
        userDetailsDTO.setAccountNonLocked(true);
        userDetailsDTO.setCredentialsNonExpired(true);
        userDetailsDTO.setEnabled(true);
        return super.save(userDetailsDTO);
    }

    @Transactional
    public UserDetailsDTO update(UserDetailsDTO userDetailsDTO) {
        User existingUser =
                repository
                        .findById(userDetailsDTO.getId())
                        .orElseThrow(() -> new NotFoundException("User not found"));
        if (userDetailsDTO.getUsername() != null) {
            existingUser.setUsername(userDetailsDTO.getUsername());
        }
        if (userDetailsDTO.getPassword() != null) {
            existingUser.setPassword(passwordEncoder.encode(userDetailsDTO.getPassword()));
        }

        return this.mapper.toDTO(this.repository.save(existingUser));
    }

    public List<UserDTO> findByIdPublic(Set<Long> id) {
        List<User> users = (List<User>) this.repository.findAllById(id);
        if (users.isEmpty()) {
            throw new NotFoundException("User id not found");
        }
        return this.mapper.userToUserDTOList(users);
    }

    public UserDetailsDTO findByUsername(String username) throws UsernameNotFoundException {
        if (!getUsername().equals(username) && !hasAuthority(ROLE_ADMIN)) {
            throw new ForbiddenException("You are not allowed to view this user's details");
        }

        return (UserDetailsDTO) userDetailsService.loadUserByUsername(username);
    }

    public Long findIdByUsername(String username) {
        return this.repository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException("Username not found"))
                .getId();
    }

    public TokensDTO login(@NotNull UserDTO userDTO) {
        UsernamePasswordAuthenticationToken token =
                new UsernamePasswordAuthenticationToken(
                        userDTO.getUsername(), userDTO.getPassword());
        Authentication authentication = authenticationManager.authenticate(token);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String username = userDTO.getUsername();
        return new TokensDTO(
                tokenGenerator.generateAccessToken(username),
                tokenGenerator.generateRefreshToken(username));
    }

//    @Transactional
//    public void changePassword(String username, String oldPassword, String newPassword) {
//        UserDetails userDetails = userDetailsService.loadUserByUsername(username);
//        if (userDetails == null) {
//            throw new NotFoundException("User not found");
//        }
//
//        User user = repository.findByUsername(username)
//                .orElseThrow(() -> new NotFoundException("User not found"));
//
//        if (!passwordEncoder.matches(oldPassword, user.getPassword())) {
//            throw new ForbiddenException("Old password is incorrect");
//        }
//
//        user.setPassword(passwordEncoder.encode(newPassword));
//        repository.save(user);
//    }
//
//
//    private void validatePassword(String password) {
//        int PASSWORD_MIN_LENGTH = 8;
//        if (password.length() < PASSWORD_MIN_LENGTH ||
//                !Pattern.compile("[a-z]").matcher(password).find() ||
//                !Pattern.compile("[A-Z]").matcher(password).find() ||
//                !Pattern.compile("\\d").matcher(password).find() ||
//                !Pattern.compile("[!@#$%^&*()-_=+{};:,<.>?]").matcher(password).find()) {
//            throw new IllegalArgumentException("Password must meet the standard password criteria");
//        }
//    }


    public TokensDTO refresh(String refreshToken) {
        refreshToken = refreshToken.substring(BEARER_PREFIX.length());
        return new TokensDTO(tokenGenerator.refreshAccessToken(refreshToken), refreshToken);
    }
}
