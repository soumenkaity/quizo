package com.stackroute.employeeservice.controller;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.stackroute.employeeservice.domain.Attempt;
import com.stackroute.employeeservice.domain.Question;
import com.stackroute.employeeservice.domain.TestUser;
import com.stackroute.employeeservice.exception.QuestionNotFoundException;
import com.stackroute.employeeservice.service.FetchQuestionsService;
import com.stackroute.employeeservice.service.FetchTopicService;
import com.stackroute.employeeservice.service.QuestionService;
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
    private QuestionService questionService;


    @Autowired
    public QuestionController(FetchQuestionsService fetchQuestionsService, FetchTopicService fetchTopicService, QuestionService questionService) {
      this.fetchQuestionsService = fetchQuestionsService;
      this.fetchTopicService = fetchTopicService;
      this.questionService = questionService;
    }


    @PostMapping("instruction")
    public ResponseEntity getFirstQuestion(@RequestBody ObjectNode jsonNodes) throws QuestionNotFoundException{
        ResponseEntity responseEntity;
        Question q = fetchQuestionsService.getFirstQuestion(jsonNodes.get("id").asText(),jsonNodes.get("testId").asText(), jsonNodes.get("collectionName").asText(), jsonNodes.get("empId").asText(), jsonNodes.get("empName").asText());
        responseEntity = new ResponseEntity(q, HttpStatus.OK);
        return responseEntity;
    }

    @PostMapping("test")
    public ResponseEntity getNextQuestion(@RequestBody String response) throws QuestionNotFoundException{
        ResponseEntity responseEntity;

        List<Object> question = fetchQuestionsService.getNextQuestion(Integer.parseInt(response));
        if(question != null)
            responseEntity = new ResponseEntity(question, HttpStatus.OK);
        else
            responseEntity = new ResponseEntity<String>("Your test is completed", HttpStatus.NOT_FOUND);
        return responseEntity;
    }

    @GetMapping("/test")
    public ResponseEntity getQuestion(@RequestParam String topic,@RequestParam String difficulty){
      return new ResponseEntity(questionService.getQuestion(topic,difficulty),HttpStatus.OK);
    }
    @PostMapping("/modify")
    public ResponseEntity saveQuestionAfterTest(@RequestParam String topic,@RequestBody List<Attempt> answers){
      return new ResponseEntity(questionService.saveQuestionAfterTest(topic,answers),HttpStatus.OK);
    }

    @PostMapping("/complete")
    public ResponseEntity completeTest(@RequestBody TestUser testUser){
      return new ResponseEntity(questionService.saveTestDetails(testUser),HttpStatus.OK);
    }
}
