package com.example.demo.service;

import com.example.demo.domain.UserMongo;
import com.example.demo.repository.UserMongoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsService {

  private UserMongoRepository userMongoRepository;

  @Autowired
  public UserDetailsService(UserMongoRepository userMongoRepository) {
    this.userMongoRepository = userMongoRepository;
  }

  public UserMongo getUserDetails(String email) {return userMongoRepository.findByEmail(email);}
}
