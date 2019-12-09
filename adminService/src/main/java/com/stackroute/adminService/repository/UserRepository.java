package com.stackroute.adminService.repository;

import com.stackroute.adminService.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserRepository extends MongoRepository<User, String> {
  public List<User> findByEmail(String email);
}
