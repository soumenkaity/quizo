package com.stackroute.employeeservice.repository;

import com.stackroute.employeeservice.domain.EmployeeDetails;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EmployeeDetailsRepository extends MongoRepository<EmployeeDetails, String> {
}
