package com.stackroute.adminService.controller;

import com.stackroute.adminService.model.Question;
import com.stackroute.adminService.model.Topic;
import com.stackroute.adminService.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/admin/topic")
public class TopicController {

  private TopicService topicService;

  @Autowired
  public TopicController(TopicService topicService) {
    this.topicService = topicService;
  }

  @PostMapping("/add")
  public ResponseEntity insertTopic(@RequestBody Topic topic){ return new ResponseEntity(topicService.insertTopic(topic), HttpStatus.OK);}

  @GetMapping("/{topic}/all")
  public ResponseEntity getAllQuestionsOfTopic(@PathVariable String topic){ return new ResponseEntity(topicService.getAllQuestionsOfTopic(topic), HttpStatus.OK);}

  @GetMapping("/{topic}")
  public ResponseEntity getAllQuestionsOfTopicByPage(@PathVariable String topic,@RequestParam int page){ return new ResponseEntity(topicService.getPageOfQuestions(topic,page), HttpStatus.OK);}

  @GetMapping("/{topic}/{id}")
  public ResponseEntity getSingleQuestionsOfTopic(@PathVariable String topic,@PathVariable String id){ return new ResponseEntity(topicService.getSingleQuestionsOfTopic(topic,id), HttpStatus.OK);}

  @PutMapping("/{topic}")
  public ResponseEntity updateSingleQuestionsOfTopic(@PathVariable String topic, @RequestBody Question question){ return new ResponseEntity(topicService.updateSingleQuestionsOfTopic(topic,question), HttpStatus.OK);}

  @GetMapping("/delete")
  public ResponseEntity deleteTopic(@RequestParam String name){ return  new ResponseEntity(topicService.deleteTopic(name),HttpStatus.OK);}

  @GetMapping("/{topic}/query")
  public ResponseEntity getQuestionsOfTopicByDifficulty(@PathVariable String topic,@RequestParam(required = false) String difficulty){ return new ResponseEntity(topicService.getQuestionsOfTopicByDifficulty(topic,difficulty), HttpStatus.OK);}

  @GetMapping("/{topic}/metadata")
  public ResponseEntity getMetadata(@PathVariable String topic){ return new ResponseEntity(topicService.getMetadata(topic), HttpStatus.OK);}

  @GetMapping("/{topic}/reshuffle")
  public ResponseEntity reshuffle(@PathVariable String topic,@RequestParam(required = false ,defaultValue = "66") int easyCount,@RequestParam(required = false ,defaultValue = "66") int mediumCount)
  { return new ResponseEntity(topicService.reshuffle(topic,easyCount,mediumCount), HttpStatus.OK);}

  @PostMapping("/{topic}/insert")
  public ResponseEntity insertQuestionsInTopic(@PathVariable String topic,@RequestBody List<Question> questions){ return new ResponseEntity(topicService.insertQuestionsInTopic(topic,questions), HttpStatus.OK);}

}
