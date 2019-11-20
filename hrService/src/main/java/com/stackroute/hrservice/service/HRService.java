package com.stackroute.hrservice.service;

import com.stackroute.hrservice.model.Topic;
import com.stackroute.hrservice.model.User;
import com.stackroute.hrservice.model.UserTest;
import com.stackroute.hrservice.repository.TopicRepository;
import com.stackroute.hrservice.repository.UserRepository;
import com.stackroute.hrservice.repository.UserTestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class HRService {

  private UserRepository userRepository;
  private TopicRepository topicRepository;
  private UserTestRepository userTestRepository;


  @Autowired
  public HRService(UserRepository userRepository, TopicRepository topicRepository, UserTestRepository userTestRepository) {
    this.userRepository = userRepository;
    this.topicRepository = topicRepository;
    this.userTestRepository = userTestRepository;
  }

  public List<User> getAllUsers(){ return  userRepository.findAll();}
  public List<Topic> getAllTopics(){
    return topicRepository.findAll();
  }
  public List<UserTest> getAllTestsAssigned(){ return userTestRepository.findAll();}
  public UserTest assignTests(UserTest userTest){ return userTestRepository.save(userTest);}
}