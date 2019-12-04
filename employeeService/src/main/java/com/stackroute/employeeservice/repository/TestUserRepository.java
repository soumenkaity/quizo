package com.stackroute.employeeservice.repository;

import com.stackroute.employeeservice.domain.TestUser;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface TestUserRepository extends MongoRepository<TestUser,String> {
  public List<TestUser> findByTopicName(String name);
  public List<TestUser> findByStatus(String nc);
  public List<TestUser> findByTopicId(String id);
  public List<TestUser> findByUserIdAndStatus(String userId,String status);
  public List<TestUser> findByUserEmailAndStatus(String userId,String status);
  public TestUser findByUserEmail(String email);
}
