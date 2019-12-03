package com.stackroute.employeeservice.repository;

import com.stackroute.employeeservice.domain.Topic;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TopicRepository extends MongoRepository<Topic,String> {
    public List<Topic> findByName(String name);
}
