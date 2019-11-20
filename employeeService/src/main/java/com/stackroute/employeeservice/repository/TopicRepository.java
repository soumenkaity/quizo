package com.stackroute.employeeservice.repository;

import com.stackroute.employeeservice.domain.Topic;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

public interface TopicRepository extends MongoRepository<Topic,String> {
}
