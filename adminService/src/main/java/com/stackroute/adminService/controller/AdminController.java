package com.stackroute.adminService.controller;

import com.stackroute.adminService.model.Message;
import com.stackroute.adminService.service.AdminService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@Controller
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminController {

    Logger lg = LoggerFactory.getLogger(AdminController.class);
    private AdminService adminService;

    @Autowired
    public AdminController(AdminService adminService){
        this.adminService=adminService;
    }
    
    @PostMapping("/create-topic")
    public ResponseEntity<?> createTest(@RequestBody String topic)throws IOException {
        ResponseEntity responseEntity;

        int value=adminService.createTest(topic);

        if(value==0){
            responseEntity=new ResponseEntity<Message>(new Message("Test is Created"), HttpStatus.CREATED);
            lg.info(responseEntity.toString());
            return responseEntity;
        }
        else if(value==1){
            responseEntity=new ResponseEntity<Message>(new Message("wikipedia page doesnot exists for the given topic"), HttpStatus.OK);
            lg.info(responseEntity.toString());
            return responseEntity;
        }
        else if(value==2){
            responseEntity=new ResponseEntity<Message>(new Message("test is already created"), HttpStatus.OK);
            lg.info(responseEntity.toString());
            return responseEntity;
        }
        else{
            responseEntity=new ResponseEntity<Message>(new Message("test cannot be created.TRY AGAIN"), HttpStatus.OK);
            lg.info(responseEntity.toString());
            return responseEntity;
        }

    }
}
