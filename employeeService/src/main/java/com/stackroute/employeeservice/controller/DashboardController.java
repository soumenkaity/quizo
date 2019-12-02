package com.stackroute.employeeservice.controller;

import com.stackroute.employeeservice.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/employee/dashboard")
@CrossOrigin("*")
public class DashboardController {

  private DashboardService dashboardService;

  @Autowired
  public DashboardController(DashboardService dashboardService) {
    this.dashboardService = dashboardService;
  }

  @GetMapping("")
  public ResponseEntity getGetEmpDetails(@RequestParam String email){
    return new ResponseEntity(dashboardService.getGetEmpDetails(email), HttpStatus.OK);
  }
  @GetMapping("/active")
  public ResponseEntity getActiveTests(@RequestParam String id){
    return new ResponseEntity(dashboardService.getActiveTests(id), HttpStatus.OK);
  }

  @GetMapping("/complete")
  public ResponseEntity getCompletedTests(@RequestParam String id){
    return new ResponseEntity(dashboardService.getCompletedTests(id), HttpStatus.OK);
  }

  @GetMapping("/active/e")
  public ResponseEntity getActiveTestsByEmail(@RequestParam String email){
    return new ResponseEntity(dashboardService.getActiveTestsByEmail(email), HttpStatus.OK);
  }

  @GetMapping("/complete/e")
  public ResponseEntity getCompletedTestsByEmail(@RequestParam String email){
    return new ResponseEntity(dashboardService.getCompletedTestsByEmail(email), HttpStatus.OK);
  }

}
