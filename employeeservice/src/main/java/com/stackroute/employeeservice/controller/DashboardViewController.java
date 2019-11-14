package com.stackroute.employeeservice.controller;

import com.stackroute.employeeservice.domain.DashboardUser;
import com.stackroute.employeeservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/employee/dashboard/")
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService)
    {
        this.userService=userService;
    }
    @PostMapping("employee")
    public ResponseEntity<?> saveUser(@RequestBody DashboardUser dashboarduser)
    {
        ResponseEntity responseEntity;
        try
        {
            userService.saveDashboardUser(dashboarduser);
            responseEntity=new ResponseEntity<String>("successfully created", HttpStatus.CREATED);
        }
        catch(Exception ex)
        {
            responseEntity=new ResponseEntity<String>(ex.getMessage(), HttpStatus.CONFLICT);
        }
        return responseEntity;
    }
    @GetMapping("employees")
    public ResponseEntity<?> getAllDashboardUsers()
    {

        ResponseEntity responseEntity;
        try
        {
            responseEntity=new ResponseEntity<List<DashboardUser>>(userService.getAllDashboardUser(),HttpStatus.OK);
        }
        catch (Exception ex)
        {
            responseEntity=new ResponseEntity<String>(ex.getMessage(),HttpStatus.CONFLICT);
        }
        return responseEntity;
    }

    @DeleteMapping("employee")
    public ResponseEntity<?> deleteUser(DashboardUser dashboardUser)
    {
        ResponseEntity responseEntity;
         try
        {
            userService.deleteUser(dashboardUser);
            responseEntity=new ResponseEntity<String>("sucessfully deleted  " ,HttpStatus.OK);
        }
        catch(Exception ex)
        {
            responseEntity=new ResponseEntity<String>(ex.getMessage(),HttpStatus.CONFLICT);
        }
        return responseEntity;
    }
}
