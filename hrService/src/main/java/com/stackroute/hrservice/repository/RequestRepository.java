package com.stackroute.hrservice.repository;

import com.stackroute.hrservice.model.Request;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RequestRepository extends MongoRepository<Request,String> {
}
