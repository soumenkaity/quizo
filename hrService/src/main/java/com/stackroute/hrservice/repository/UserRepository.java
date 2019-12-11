package com.stackroute.hrservice.repository;

import com.stackroute.hrservice.model.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserRepository extends MongoRepository<User, String> {
  public List<User> findByEmail(String email);
  public List<User> findByRole(String role);
}
