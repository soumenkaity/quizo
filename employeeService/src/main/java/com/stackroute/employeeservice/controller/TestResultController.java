package com.stackroute.employeeservice.controller;

import com.stackroute.employeeservice.domain.Question;
import com.stackroute.employeeservice.domain.Response;
import com.stackroute.employeeservice.domain.TestResult;
import com.stackroute.employeeservice.exception.QuestionNotFoundException;
import com.stackroute.employeeservice.exception.TestResultNotFoundException;
import com.stackroute.employeeservice.service.TestResultService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/quiz/test/")
@CrossOrigin("*")
public class TestResultController {
    private TestResultService testResultService;

    @Autowired
    public TestResultController(TestResultService testResultService) {
        this.testResultService = testResultService;
    }

    @PostMapping("submit")
    public ResponseEntity<?> saveTestResult(@RequestBody TestResult testResult) {
        ResponseEntity responseEntity;

        testResultService.saveTestResult(testResult);
        responseEntity=new ResponseEntity<String>("Successfully saved", HttpStatus.CREATED);

        return responseEntity;
    }

    @GetMapping("testResults")
    public ResponseEntity<?> getAllTestResults() throws TestResultNotFoundException{
        ResponseEntity responseEntity;

        responseEntity = new ResponseEntity<List<TestResult>>(testResultService.getAllTestResults(), HttpStatus.OK);

        return responseEntity;
    }

    @GetMapping("testResultsByTestId/{testId}")
    public ResponseEntity<?> getTestResultByTestId(@PathVariable String testId) throws TestResultNotFoundException {
        ResponseEntity responseEntity;

        responseEntity = new ResponseEntity<TestResult>(testResultService.getTestResultByTestId(testId), HttpStatus.OK);

        return responseEntity;
    }

    @GetMapping("testResultsByEmployeeId/{employeeId}")
    public ResponseEntity<?> getAllTestResultsByEmployeeId(@PathVariable String employeeId) throws TestResultNotFoundException {
        ResponseEntity responseEntity;

        responseEntity = new ResponseEntity<List<TestResult>>(testResultService.getAllTestResultsByEmployeeId(employeeId), HttpStatus.OK);

        return responseEntity;
    }

    @DeleteMapping("deleteAll")
    public ResponseEntity<?> deleteAllTestResults() throws TestResultNotFoundException{
        ResponseEntity responseEntity;

        testResultService.deleteAllTestResults();
        responseEntity=new ResponseEntity<String>("Successfully Deleted", HttpStatus.GONE);

        return  responseEntity;
    }

    @DeleteMapping("deleteByTestId")
    public ResponseEntity<?> deleteTestResultByTestId(@RequestParam String testId) throws TestResultNotFoundException {
        ResponseEntity responseEntity;

        testResultService.deleteTestResultByTestId(testId);
        responseEntity=new ResponseEntity<String>("Successfully Deleted", HttpStatus.GONE);

        return  responseEntity;
    }

    @DeleteMapping("deleteByEmployeeId")
    public ResponseEntity<?> deleteAllTestResultsByEmployeeId(@RequestParam String employeeId) throws TestResultNotFoundException {
        ResponseEntity responseEntity;

        testResultService.deleteAllTestResultsByEmployeeId(employeeId);
        responseEntity=new ResponseEntity<String>("Successfully Deleted", HttpStatus.GONE);

        return  responseEntity;
    }





}
