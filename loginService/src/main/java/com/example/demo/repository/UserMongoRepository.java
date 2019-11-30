package com.example.demo.repository;

import com.example.demo.domain.UserMongo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserMongoRepository extends MongoRepository<UserMongo,String> {
  public UserMongo findByEmail(String email);
}
