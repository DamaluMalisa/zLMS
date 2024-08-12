package com.zahara.lms.subject.config;

import com.zahara.lms.shared.security.AuthenticationTokenFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static com.zahara.lms.shared.security.SecurityUtils.*;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http, AuthenticationTokenFilter authenticationTokenFilter)
            throws Exception {
        return http
                .addFilterBefore(authenticationTokenFilter, UsernamePasswordAuthenticationFilter.class)
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .csrf().disable()
                .authorizeRequests()
                .antMatchers(
                        HttpMethod.GET,
                        "/actuator/**",
                        "/docs/**").permitAll()
                .antMatchers(
                        HttpMethod.GET,
                        "/subjects/student/*/all").hasAnyAuthority(ROLE_STUDENT, ROLE_ADMIN)
                .antMatchers(
                        HttpMethod.GET,
                        "/subjects/**",
                        "/subject-announcements/**",
                        "/announcements/**",
                        "/assignments/**",
                        "/files/**",
                        "/pages/**",
                        "/quizzes/**",
                        "/quiz-submissions/**",
                        "/assignment-submissions/**",
                        "/quiz-grades/**",
                        "/assignment-grades/**",
                        "/bundles/**",
                        "/subject-terms/**").hasAnyAuthority(ROLE_STUDENT, ROLE_TEACHER, ROLE_ADMIN)
                .antMatchers(
                        HttpMethod.GET,
                        "/subject-enrollments/*",
                        "/subject-enrollments/student/*/average-grade",
                        "/subject-enrollments/student/*/total-ects").hasAnyAuthority(ROLE_STUDENT, ROLE_TEACHER, ROLE_ADMIN)
                .antMatchers(
                        HttpMethod.GET,
                        "/subject-enrollments/student/**").hasAnyAuthority(ROLE_STUDENT, ROLE_ADMIN)
                .antMatchers(
                        HttpMethod.GET,
                        "/subject-enrollments/subject/**",
                        "/subject-enrollments/subject/*/student-id/all").hasAnyAuthority(ROLE_TEACHER, ROLE_ADMIN)
                .antMatchers(
                        HttpMethod.PATCH,
                        "/subjects/*/descriptions",
                        "/subject-enrollments/*/grade").hasAnyAuthority(ROLE_TEACHER, ROLE_ADMIN)
                .antMatchers(
                        HttpMethod.POST,
                        "/assignments/**",
                        "/files/**",
                        "/pages/**",
                        "/quizzes/**",
                        "/quiz-grades/**",
                        "/assignment-grades/**",
                        "/bundles/**",
                        "/subject-announcements/**").hasAnyAuthority(ROLE_TEACHER, ROLE_ADMIN, ROLE_STUDENT)
                .antMatchers(
                        HttpMethod.POST,
                        "/quiz-submissions/**",
                        "/assignment-submissions",
                        "/files/**").hasAnyAuthority(ROLE_STUDENT, ROLE_TEACHER)
                .anyRequest().hasAuthority(ROLE_ADMIN)
                .and()
                .build();
    }
}
