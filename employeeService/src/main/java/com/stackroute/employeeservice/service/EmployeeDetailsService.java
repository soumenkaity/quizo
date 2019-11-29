package com.stackroute.employeeservice.service;

import com.stackroute.employeeservice.domain.EmployeeDetails;

import java.util.List;

public interface EmployeeDetailsService {

    public List<EmployeeDetails> getAllEmployeeDetails();
    public EmployeeDetails saveEmployeeDetails(EmployeeDetails employeeDetails);

}
