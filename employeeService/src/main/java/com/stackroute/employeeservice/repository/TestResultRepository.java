package com.stackroute.employeeservice.repository;

import com.stackroute.employeeservice.domain.TestResult;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TestResultRepository extends MongoRepository<TestResult,String> {
    List<TestResult> findByEmployeeId(String employeeId);
    List<TestResult> deleteByEmployeeId(String employeeId);
}
