package com.example.demo.controller;

import com.example.demo.domain.Hr;
import com.example.demo.service.HrRegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public class UserController {

    private HrRegistrationService hrService;
    private ResponseEntity responseEntity;

    @Autowired
    public UserController(HrRegistrationService hrService) {
        this.hrService = hrService;
    }

    @PostMapping("registerhr")
    public ResponseEntity<?> saveHr(@RequestBody Hr hr){

        hrService.saveHr(hr);
        responseEntity=new ResponseEntity("Successfully Created", HttpStatus.CREATED);

        return responseEntity;
    }
    @GetMapping("hr")
    public ResponseEntity<?> getAllHrs() {
        return new ResponseEntity<List<Hr>>(hrService.getAllHrs(), HttpStatus.OK);
    }


}
