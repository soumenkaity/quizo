package com.stackroute.hrservice.repository;

import com.stackroute.hrservice.model.UserTest;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserTestRepository extends MongoRepository<UserTest,String> {
}
