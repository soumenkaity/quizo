package com.stackroute.employeeservice.repository;

import com.stackroute.employeeservice.domain.Topic;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TopicRepository extends MongoRepository<Topic,String> {
}
