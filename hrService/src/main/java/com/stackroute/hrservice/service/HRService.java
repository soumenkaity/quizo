package com.stackroute.hrservice.service;

import com.stackroute.hrservice.model.TestUser;
import com.stackroute.hrservice.model.Topic;
import com.stackroute.hrservice.model.User;
import com.stackroute.hrservice.repository.TopicRepository;
import com.stackroute.hrservice.repository.TestUserRepository;
import com.stackroute.hrservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class HRService {


  private TopicRepository topicRepository;
  private TestUserRepository testUserRepository;
  private UserRepository userRepository;
  private NotificationService notificationService;

  @Autowired
  public HRService(TopicRepository topicRepository, TestUserRepository testUserRepository, UserRepository userRepository, NotificationService notificationService) {
    this.topicRepository = topicRepository;
    this.testUserRepository = testUserRepository;
    this.userRepository = userRepository;
    this.notificationService = notificationService;
  }


  public List<Topic> getAllTopics(){
    return topicRepository.findAll();
  }
  public Topic getTopicById(String id){return topicRepository.findById(id).orElseThrow(()->new RuntimeException());}
  public List<TestUser> getAllTestsAssigned(){ return testUserRepository.findAll();}
  public List<TestUser> getTestsByTopic(String name){return testUserRepository.findByTopicName(name);}
  public List<TestUser> getAllTestsByStatus(String status){ return testUserRepository.findByStatus(status);}
  public String addTest(List<TestUser> testUser){
//   List<String> notSentMails = new ArrayList<String>();
//    for(TestUser tu: testUser){
//      User user = userRepository.findById(tu.getUserId()).orElseThrow(()->new RuntimeException());
//      try{notificationService.sendNotificationForTest(user);}catch (MailException e){
//        notSentMails.add(user.getEmail());
//      }
//    }
     testUserRepository.saveAll(testUser);
     return "tests created";
//    return notSentMails.toString();
  }
  public void deleteTest(TestUser testUser) {testUserRepository.delete(testUser);}
}
