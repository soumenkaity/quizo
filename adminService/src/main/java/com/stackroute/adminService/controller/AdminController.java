package com.stackroute.adminService.controller;

import com.stackroute.adminService.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@Controller
@RequestMapping("/quiz")
public class AdminController {

    private AdminService adminService;

    @Autowired
    public AdminController(AdminService adminService){
        this.adminService=adminService;
    }

    @PostMapping("/admin")
    public ResponseEntity<?> createTest(@RequestBody String topic)throws IOException {
        ResponseEntity responseEntity;
        adminService.createTest(topic);
        responseEntity=new ResponseEntity<String>("Test is Created", HttpStatus.CREATED);
        return responseEntity;
    }
}
