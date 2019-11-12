package com.stackroute.employeeservice.controller;

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
@RequestMapping(value = "/quiz/test/")
public class QuestionController {

    private FetchQuestionsService fetchQuestionsService;
    private FetchTopicService fetchTopicService;

    @Autowired
    public QuestionController(FetchQuestionsService fetchQuestionsService, FetchTopicService topicService) {
        this.fetchQuestionsService = fetchQuestionsService;
        this.fetchTopicService = topicService;
    }


    @GetMapping("questions")
    public ResponseEntity<?> getAllQuestions() throws QuestionNotFoundException{
        ResponseEntity responseEntity;

        responseEntity = new ResponseEntity<List<Question>>(fetchQuestionsService.getAllQuestions(), HttpStatus.OK);

        return responseEntity;
    }
    @GetMapping("topics")
    public ResponseEntity<?> getAllTopics() throws QuestionNotFoundException{
        ResponseEntity responseEntity;

        responseEntity = new ResponseEntity<List<Topic>>(fetchTopicService.getAllTopics(), HttpStatus.OK);

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
