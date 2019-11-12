package com.stackroute.employeeservice.controller;

import com.stackroute.employeeservice.domain.Question;
import com.stackroute.employeeservice.exception.QuestionNotFoundException;
import com.stackroute.employeeservice.service.FetchQuestionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/quiz/test/")
public class QuestionController {
    @Autowired
    private FetchQuestionsService fetchQuestionsService;

    public QuestionController(FetchQuestionsService fetchQuestionsService) {
        this.fetchQuestionsService = fetchQuestionsService;
    }

    @GetMapping("questions")
    public ResponseEntity<?> getAllQuestions() throws QuestionNotFoundException{
        ResponseEntity responseEntity;

        responseEntity = new ResponseEntity<List<Question>>(fetchQuestionsService.getAllQuestions(), HttpStatus.OK);

        return responseEntity;
    }

    @PostMapping("question")
    public ResponseEntity<?> saveQuestion(@RequestBody Question track) {
        ResponseEntity responseEntity;

        fetchQuestionsService.saveQuestion(track);
        responseEntity=new ResponseEntity<String>("Successfully created", HttpStatus.CREATED);

        return responseEntity;
    }

}
