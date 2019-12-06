package com.stackroute.employeeservice.controller;

import com.stackroute.employeeservice.domain.Result;
import com.stackroute.employeeservice.exception.QuestionNotFoundException;
import com.stackroute.employeeservice.service.ResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/employee")
public class ResultController {

    private ResultService resultService;

    @Autowired
    public ResultController(ResultService resultService) {
        this.resultService = resultService;
    }

    @PostMapping("result")
    public ResponseEntity<?> getNextQuestion(@RequestBody Result result) throws QuestionNotFoundException {
        ResponseEntity responseEntity;

        responseEntity = new ResponseEntity<Result>(resultService.saveResult(result), HttpStatus.OK);

        return responseEntity;
    }

    @GetMapping("/resultbyemployee/{id}")
    public ResponseEntity getResultByEmployeeId(@PathVariable String id)
    {return new ResponseEntity(resultService.getResultsByEmpId(id), HttpStatus.OK); }
    @GetMapping("/resultbytopic/{id}")
    public ResponseEntity getResultByTopicId(@PathVariable String id)
    {return new ResponseEntity(resultService.getResultsByTopicId(id), HttpStatus.OK); }
    @GetMapping("/resultbytest/{id}")
    public ResponseEntity getResultByTestId(@PathVariable String id)
    {return new ResponseEntity(resultService.getResultsByTestId(id), HttpStatus.OK); }
    @GetMapping("/resultbyid/{id}")
    public ResponseEntity getResultById(@PathVariable String id)
    {return new ResponseEntity(resultService.getResultsById(id), HttpStatus.OK); }
}
