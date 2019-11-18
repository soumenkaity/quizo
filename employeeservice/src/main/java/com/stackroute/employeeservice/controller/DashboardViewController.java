package com.stackroute.employeeservice.controller;

import com.stackroute.employeeservice.domain.DashboardItem;
import com.stackroute.employeeservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/employee/dashboard/")
public class DashboardViewController {
    private UserService userService;

    @Autowired
    public DashboardViewController(UserService userService)
    {
        this.userService=userService;
    }
    @PostMapping("employee")
    public ResponseEntity<?> saveUser(@RequestBody DashboardItem dashboarduser)
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
            responseEntity=new ResponseEntity<List<DashboardItem>>(userService.getAllDashboardUser(),HttpStatus.OK);
        }
        catch (Exception ex)
        {
            responseEntity=new ResponseEntity<String>(ex.getMessage(),HttpStatus.CONFLICT);
        }
        return responseEntity;
    }

    @DeleteMapping("employee")
    public ResponseEntity<?> deleteUser(DashboardItem dashboardItem)
    {
        ResponseEntity responseEntity;
         try
        {
            userService.deleteDashboardItem(dashboardItem);
            responseEntity=new ResponseEntity<String>("sucessfully deleted  " ,HttpStatus.OK);
        }
        catch(Exception ex)
        {
            responseEntity=new ResponseEntity<String>(ex.getMessage(),HttpStatus.CONFLICT);
        }
        return responseEntity;
    }
}
