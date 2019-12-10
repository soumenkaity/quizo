package com.stackroute.adminService.controller;


import com.stackroute.adminService.model.Request;
import com.stackroute.adminService.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/admin")
public class DashboardController {
 private DashboardService dashboardService;

  @Autowired
  public DashboardController(DashboardService dashboardService) {
    this.dashboardService = dashboardService;
  }

  @GetMapping("/topics")
  public ResponseEntity getAllTopics(){ return new ResponseEntity(dashboardService.getAllTopics(), HttpStatus.OK);}
  @GetMapping("/requests")
  public ResponseEntity getAllRequests(){ return new ResponseEntity(dashboardService.getNotCompletedRequests("N"), HttpStatus.OK);}
  @PutMapping("/requests")
  public ResponseEntity updateRequest(@RequestBody Request request){ return new ResponseEntity(dashboardService.updateRequest(request), HttpStatus.OK);}
}
