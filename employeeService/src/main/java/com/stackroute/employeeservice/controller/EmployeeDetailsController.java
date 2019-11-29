package com.stackroute.employeeservice.controller;


import com.stackroute.employeeservice.domain.DashboardItem;
import com.stackroute.employeeservice.domain.EmployeeDetails;
import com.stackroute.employeeservice.service.EmployeeDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/employee")
@CrossOrigin("*")
public class EmployeeDetailsController {


    private EmployeeDetailsService employeeDetailsService;

    @Autowired
    public EmployeeDetailsController(EmployeeDetailsService employeeDetailsService) {
        this.employeeDetailsService = employeeDetailsService;
    }

    @PostMapping("/employeedetails")
    public ResponseEntity<?> saveEmployeeDetails(@RequestBody EmployeeDetails employeeDetails)
    {
        ResponseEntity responseEntity;
        try
        {
            employeeDetailsService.saveEmployeeDetails(employeeDetails);
            responseEntity=new ResponseEntity<String>("successfully Saved", HttpStatus.CREATED);
        }
        catch(Exception ex)
        {
            responseEntity=new ResponseEntity<String>(ex.getMessage(), HttpStatus.CONFLICT);
        }
        return responseEntity;
    }
    @GetMapping("/getemployeesdetails")
    public ResponseEntity<?> getAllDashboardUsers()
    {

        ResponseEntity responseEntity;
        try
        {
            responseEntity=new ResponseEntity<List<EmployeeDetails>>(employeeDetailsService.getAllEmployeeDetails(),HttpStatus.OK);
        }
        catch (Exception ex)
        {
            responseEntity=new ResponseEntity<String>(ex.getMessage(),HttpStatus.CONFLICT);
        }
        return responseEntity;
    }


}
