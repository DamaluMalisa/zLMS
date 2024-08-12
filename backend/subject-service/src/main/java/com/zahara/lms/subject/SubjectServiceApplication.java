package com.zahara.lms.subject;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableEurekaClient
@EnableFeignClients({"com.zahara.lms.subject", "com.zahara.lms.shared"})
@ComponentScan({"com.zahara.lms.subject", "com.zahara.lms.shared"})
@OpenAPIDefinition(
        info =
                @Info(
                        title = "Subject API",
                        version = "1.0",
                        description = "Documentation Subject API v1.0"))
public class SubjectServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(SubjectServiceApplication.class, args);
    }
}
