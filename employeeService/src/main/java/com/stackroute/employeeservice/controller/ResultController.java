package com.stackroute.employeeservice.controller;

import com.stackroute.employeeservice.domain.Result;
import com.stackroute.employeeservice.exception.QuestionNotFoundException;
import com.stackroute.employeeservice.service.ResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/employee")
public class ResultController {

    private ResultService resultService;

    @Autowired
    public ResultController(ResultService resultService) {
        this.resultService = resultService;
    }

    @PostMapping("/result")
    public ResponseEntity<?> getNextQuestion(@RequestBody Result result) throws QuestionNotFoundException {
        ResponseEntity responseEntity;

        responseEntity = new ResponseEntity<Result>(resultService.saveResult(result), HttpStatus.OK);

        return responseEntity;
    }

    @GetMapping("/result/all")
    public ResponseEntity getAllResults(){ return  new ResponseEntity(resultService.getAllResults(),HttpStatus.OK);}
    @GetMapping("/result/employee/{id}")
    public ResponseEntity getResultByEmployeeId(@PathVariable String id)
    {return new ResponseEntity(resultService.getResultsByEmpId(id), HttpStatus.OK); }
    @GetMapping("/result/topic/{id}")
    public ResponseEntity getResultByTopicId(@PathVariable String id)
    {return new ResponseEntity(resultService.getResultsByTopicId(id), HttpStatus.OK); }
    @GetMapping("/result/test/{id}")
    public ResponseEntity getResultByTestId(@PathVariable String id)
    {return new ResponseEntity(resultService.getResultsByTestId(id), HttpStatus.OK); }
    @GetMapping("/result/{id}")
    public ResponseEntity getResultById(@PathVariable String id)
    {return new ResponseEntity(resultService.getResultsById(id), HttpStatus.OK); }
    @GetMapping("/result")
    public ResponseEntity getResultByTestIdAndEmpId(@RequestParam String testId,@RequestParam String empId)
    {return new ResponseEntity(resultService.getResultByTestIdAndEmpId(testId,empId), HttpStatus.OK); }
}
