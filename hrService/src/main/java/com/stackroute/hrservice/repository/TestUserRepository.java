package com.stackroute.hrservice.repository;

import com.stackroute.hrservice.model.TestUser;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestUserRepository extends MongoRepository<TestUser,String> {
}
