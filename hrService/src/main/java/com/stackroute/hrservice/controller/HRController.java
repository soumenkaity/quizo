package com.stackroute.hrservice.controller;

import com.stackroute.hrservice.model.Employee;
import com.stackroute.hrservice.model.UserTest;
import com.stackroute.hrservice.service.HRService;
import com.stackroute.hrservice.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hr")
public class HRController {
  private HRService hrService;
  private NotificationService notificationService;
  @Autowired
  public HRController(HRService hrService,NotificationService notificationService) {
    this.hrService = hrService;
    this.notificationService = notificationService;
  }

  @GetMapping("/users")
  public ResponseEntity getAllUsers(){return new ResponseEntity(hrService.getAllUsers(), HttpStatus.OK); }

  @GetMapping("/topics")
  public ResponseEntity getAllTests(){
    return new ResponseEntity(hrService.getAllTopics(), HttpStatus.OK);
  }

  @GetMapping("/assigned")
  public ResponseEntity showAssignedTests(){ return new ResponseEntity(hrService.getAllTestsAssigned(),HttpStatus.OK); }

  @GetMapping("/getlogindetails")
  public ResponseEntity showAssignedLogin(){ return new ResponseEntity(notificationService.getAllEmployeelogin(),HttpStatus.OK); }

  @PostMapping("/assign")
  public ResponseEntity assignTests(@RequestBody UserTest userTest){
    return new ResponseEntity(hrService.assignTests(userTest),HttpStatus.OK);
  }
  @PostMapping("/sendemail")
  public String mailSend(@RequestBody List<Employee> employees) {
    try
    {
      for(Employee emp: employees)
      notificationService.sendNotification(emp);

    }
    catch (MailException e)
    {
     return "authentication Exception";
    }
   return "mailsent";
  }
}
