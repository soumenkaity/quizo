package com.stackroute.hrservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@EnableEurekaClient
@CrossOrigin("https://localhost:4200")
public class HRserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(HRserviceApplication.class, args);
	}

}
