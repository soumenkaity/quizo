package com.stackroute.hrservice.repository;

import com.stackroute.hrservice.model.Topic;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TopicRepository extends MongoRepository<Topic,String> {
}
