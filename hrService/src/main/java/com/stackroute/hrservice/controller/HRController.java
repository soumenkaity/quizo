package com.stackroute.hrservice.controller;

import com.stackroute.hrservice.model.UserTest;
import com.stackroute.hrservice.service.HRService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/hr")
public class HRController {
  private HRService hrService;

  @Autowired
  public HRController(HRService hrService) {
    this.hrService = hrService;
  }

  @GetMapping("/users")
  public ResponseEntity getAllUsers(){return new ResponseEntity(hrService.getAllUsers(), HttpStatus.OK); }
  @GetMapping("/topics")
  public ResponseEntity getAllTests(){
    return new ResponseEntity(hrService.getAllTopics(), HttpStatus.OK);
  }
  @GetMapping("/assigned")
  public ResponseEntity showAssignedTests(){ return new ResponseEntity(hrService.getAllTestsAssigned(),HttpStatus.OK); }
  @PostMapping("/assign")
  public ResponseEntity assignTests(@RequestBody UserTest userTest){
    return new ResponseEntity(hrService.assignTests(userTest),HttpStatus.OK);
  }
  @PostMapping("/sendemail")
  public String mailSend(@RequestBody Employee employee) {
    try
    {
    notificationService.sendNotification(employee);
    }
    catch (MailException e)
    {
     return "authentication Exception";
    }
   return "mailsent";
  }
}
