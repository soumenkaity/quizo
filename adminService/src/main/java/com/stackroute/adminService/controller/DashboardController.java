package com.stackroute.adminService.controller;


import com.stackroute.adminService.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/admin")
public class DashboardController {
 private DashboardService dashboardService;

  @Autowired
  public DashboardController(DashboardService dashboardService) {
    this.dashboardService = dashboardService;
  }

  @GetMapping("/users")
  public ResponseEntity getAllUsers(){ return new ResponseEntity(dashboardService.getAllUsers(), HttpStatus.OK);}
  @GetMapping("/topics")
  public ResponseEntity getAllTopics(){ return new ResponseEntity(dashboardService.getAllTopics(), HttpStatus.OK);}
  @GetMapping("/requests")
  public ResponseEntity getAllRequests(){ return new ResponseEntity(dashboardService.getAllRequests(), HttpStatus.OK);}

}
