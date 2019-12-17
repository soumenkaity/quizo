package com.stackroute.adminService.controller;

import com.stackroute.adminService.model.Contact;
import com.stackroute.adminService.model.Message;
import com.stackroute.adminService.service.AdminService;
import com.stackroute.adminService.service.ContactService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
@CrossOrigin("*")
@RestController
@RequestMapping("/admin")
public class AdminController {

    Logger logger = LoggerFactory.getLogger(AdminController.class);
    private AdminService adminService;

    private ContactService contactService;

    @Autowired
    public AdminController(AdminService adminService, ContactService contactService) {
        this.adminService = adminService;
        this.contactService = contactService;
    }

    @PostMapping("/create-topic")
    public ResponseEntity<?> createTest(@RequestBody String topic)throws IOException {
        ResponseEntity responseEntity;

        int value=adminService.createTest(topic);

        if(value==0){
            responseEntity=new ResponseEntity<Message>(new Message("Test is Created"), HttpStatus.CREATED);
            logger.info(responseEntity.toString());
            return responseEntity;
        }
        else if(value==1){
            responseEntity=new ResponseEntity<Message>(new Message("wikipedia page doesnot exists for the given topic"), HttpStatus.OK);
            logger.info(responseEntity.toString());
            return responseEntity;
        }
        else if(value==2){
            responseEntity=new ResponseEntity<Message>(new Message("test is already created"), HttpStatus.OK);
            logger.info(responseEntity.toString());
            return responseEntity;
        }
        else if(value==5){
            responseEntity=new ResponseEntity<Message>(new Message("IO Exception. TRY AGAIN"), HttpStatus.OK);
            logger.info(responseEntity.toString());
            return responseEntity;
        }
        else if(value==6){
            responseEntity=new ResponseEntity<Message>(new Message("Interrupted Exception.TRY AGAIN"), HttpStatus.OK);
            logger.info(responseEntity.toString());
            return responseEntity;
        }
        else if(value==7){
            responseEntity=new ResponseEntity<Message>(new Message("test cannot be created.TRY AGAIN"), HttpStatus.OK);
            logger.info(responseEntity.toString());
            return responseEntity;
        }
        else{
            responseEntity=new ResponseEntity<Message>(new Message("test cannot be created.TRY AGAIN"), HttpStatus.OK);
            logger.info(responseEntity.toString());
            return responseEntity;
        }

    }

    @PostMapping("/sendmessage")
    public ResponseEntity<?> saveContact(@RequestBody Contact contact)
    {
        ResponseEntity responseEntity;

        responseEntity=new ResponseEntity<Contact>(contactService.saveContact(contact), HttpStatus.OK);

        return  responseEntity;
    }
    @GetMapping("/getmessage")
    public ResponseEntity<?> getAllContact()
    {
        ResponseEntity responseEntity;

        responseEntity=new ResponseEntity(contactService.GetAllContact(), HttpStatus.OK);

        return  responseEntity;
    }

}
