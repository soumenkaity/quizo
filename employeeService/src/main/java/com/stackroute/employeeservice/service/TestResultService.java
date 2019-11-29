package com.stackroute.employeeservice.service;


import com.stackroute.employeeservice.domain.TestResult;
import com.stackroute.employeeservice.exception.TestResultNotFoundException;

import java.util.List;

public interface TestResultService {
    TestResult saveTestResult(TestResult testResult);
    List<TestResult> getAllTestResults();
    TestResult getTestResultByTestId(String testId) throws TestResultNotFoundException;
    List<TestResult> getAllTestResultsByEmployeeId(String employeeId) throws  TestResultNotFoundException;
    void deleteAllTestResults() throws TestResultNotFoundException;
    TestResult deleteTestResultByTestId(String testId) throws TestResultNotFoundException;
    List<TestResult> deleteAllTestResultsByEmployeeId(String employeeId) throws  TestResultNotFoundException;

}
