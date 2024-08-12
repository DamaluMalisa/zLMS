package com.zahara.lms.assessment.config;

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
                       "/exam-terms/student/{id}").hasAnyAuthority(ROLE_STUDENT, ROLE_ADMIN)
                .antMatchers(
                        HttpMethod.GET,
                        "/quizzes/**",
                        "/quiz-answers/**",
                        "/quiz-attempts/**",
                        "/question-assignments/**",
                        "/fill-in-blank-questions/**",
                        "/multiple-choice-questions/**",
                        "/true-or-false-questions/**").hasAnyAuthority(ROLE_STUDENT, ROLE_TEACHER, ROLE_ADMIN)
                .antMatchers(
                        HttpMethod.GET,
                        "/exam-realizations/student/*",
                        "/student-submission/**").hasAnyAuthority(ROLE_STUDENT, ROLE_ADMIN)
                .antMatchers(
                        HttpMethod.GET,
                        "/exam-realizations/exam-term/*",
                        "/quizzes/*",
                        "/exam-realizations/exam-term/*/all/pdf").hasAnyAuthority(ROLE_TEACHER, ROLE_ADMIN)
                .antMatchers(
                        HttpMethod.POST,
                        "/exam-realizations/exam-term/*",
                        "/assessment-types/**",
                        "/student-category/**",
                        "/assessments/**").hasAuthority(ROLE_TEACHER)
                .antMatchers(
                        HttpMethod.POST,
                        "/quizzes/**",
                        "/question-answers/**",
                        "/quiz-attempts/**",
                        "/question-assignments/**",
                        "/fill-in-blank-questions/**",
                        "/multiple-choice-questions/**",
                        "/true-or-false-questions/**").hasAnyAuthority(ROLE_TEACHER, ROLE_ADMIN, ROLE_STUDENT)

                .antMatchers(
                        HttpMethod.DELETE,
                        "/assessments/**").hasAuthority(ROLE_TEACHER)
                .antMatchers(
                        HttpMethod.PATCH,
                        "/exam-realizations/*/score",
                        "/assessment-types/*/score",
                        "/exam-realizations/exam-term/*/score").hasAnyAuthority(ROLE_TEACHER, ROLE_ADMIN)
                .anyRequest().hasAuthority(ROLE_ADMIN)
                .and()
                .build();
    }
}
