package com.stackroute.adminService.repository;

import com.stackroute.adminService.model.Topic;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TopicRepository extends MongoRepository<Topic,String> {
  public Topic findByName(String name);
}
