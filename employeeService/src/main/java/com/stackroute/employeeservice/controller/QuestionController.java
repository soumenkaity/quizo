package com.stackroute.employeeservice.controller;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.stackroute.employeeservice.domain.Question;
import com.stackroute.employeeservice.exception.QuestionNotFoundException;
import com.stackroute.employeeservice.service.FetchQuestionsService;
import com.stackroute.employeeservice.service.FetchTopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/employee")
@CrossOrigin("*")
public class QuestionController {

    private FetchQuestionsService fetchQuestionsService;
    private FetchTopicService fetchTopicService;

    @Autowired
    public QuestionController(FetchQuestionsService fetchQuestionsService, FetchTopicService topicService) {
        this.fetchQuestionsService = fetchQuestionsService;
        this.fetchTopicService = topicService;
    }


    @PostMapping("instruction")
    public ResponseEntity<?> getFirstQuestion(@RequestBody ObjectNode jsonNodes) throws QuestionNotFoundException{
        ResponseEntity responseEntity;

        responseEntity = new ResponseEntity<Question>(fetchQuestionsService.getFirstQuestion(jsonNodes.get("id").asText(),jsonNodes.get("testId").asText(), jsonNodes.get("collectionName").asText(), jsonNodes.get("empId").asText(), jsonNodes.get("empName").asText()), HttpStatus.OK);

        return responseEntity;
    }

    @PostMapping("test")
    public ResponseEntity<?> getNextQuestion(@RequestBody String response) throws QuestionNotFoundException{
        ResponseEntity responseEntity;

        List<Object> question = fetchQuestionsService.getNextQuestion(Integer.parseInt(response));
        if(question != null)
            responseEntity = new ResponseEntity(question, HttpStatus.OK);
        else
            responseEntity = new ResponseEntity<String>("Your test is completed", HttpStatus.NOT_FOUND);
        return responseEntity;
    }
}
