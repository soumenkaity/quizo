package com.stackroute.employeeservice.repository;

import com.stackroute.employeeservice.domain.Question;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface QuestionRepository extends MongoRepository<Question,String> {
  public Question findByDifficulty(String d);
}
