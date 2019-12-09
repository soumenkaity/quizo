package com.stackroute.adminService.service;

import com.stackroute.adminService.model.Request;
import com.stackroute.adminService.model.Topic;
import com.stackroute.adminService.model.User;
import com.stackroute.adminService.repository.RequestRepository;
import com.stackroute.adminService.repository.TopicRepository;
import com.stackroute.adminService.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DashboardService {
  private TopicRepository topicRepository;
  private RequestRepository requestRepository;
  private UserRepository userRepository;

  @Autowired
  public DashboardService(TopicRepository topicRepository, RequestRepository requestRepository, UserRepository userRepository) {
    this.topicRepository = topicRepository;
    this.requestRepository = requestRepository;
    this.userRepository = userRepository;
  }

  public List<Topic> getAllTopics(){return this.topicRepository.findAll();}
//  public List<Request> getAllRequests(){return this.requestRepository.findAll();}
  public List<Request> getNotCompletedRequests(String status){return this.requestRepository.findByStatus(status);}
  public Request updateRequest(Request request){
    System.out.println(request);
    request.setStatus("C");
    return this.requestRepository.save(request);
  }
  public List<User> getAllUsers(){return this.userRepository.findAll();}
}
