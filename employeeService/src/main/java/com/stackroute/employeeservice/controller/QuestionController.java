package com.stackroute.employeeservice.controller;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.stackroute.employeeservice.domain.Question;
import com.stackroute.employeeservice.domain.Topic;
import com.stackroute.employeeservice.exception.QuestionNotFoundException;
import com.stackroute.employeeservice.service.FetchQuestionsService;
import com.stackroute.employeeservice.service.FetchTopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/")
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

        responseEntity = new ResponseEntity<Question>(fetchQuestionsService.getFirstQuestion(jsonNodes.get(0).asText(), jsonNodes.get(1).asText(), jsonNodes.get(2).asText()), HttpStatus.OK);

        return responseEntity;
    }

    @PostMapping("test")
    public ResponseEntity<?> getNextQuestion(@RequestBody String response) throws QuestionNotFoundException{
        ResponseEntity responseEntity;

        responseEntity = new ResponseEntity<Question>(fetchQuestionsService.getNextQuestion(Integer.parseInt(response)), HttpStatus.OK);

        return responseEntity;
    }
}
