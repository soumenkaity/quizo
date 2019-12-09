package com.stackroute.hrservice.repository;

import com.stackroute.hrservice.model.TestUser;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TestUserRepository extends MongoRepository<TestUser,String> {
  public List<TestUser> findByTopicName(String name);
  public List<TestUser> findByStatus(String nc);
  public List<TestUser> findByTestId(String id);
}
