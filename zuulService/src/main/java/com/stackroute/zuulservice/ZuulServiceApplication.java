package com.stackroute.zuulservice;

import com.stackroute.zuulservice.filters.ErrorFilter;
import com.stackroute.zuulservice.filters.PostFilter;
import com.stackroute.zuulservice.filters.PreFilter;
import com.stackroute.zuulservice.filters.RouteFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@EnableZuulProxy
@CrossOrigin("*")
public class ZuulServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ZuulServiceApplication.class, args);
	}

}
