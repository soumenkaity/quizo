package com.stackroute.adminService.repository;

import com.stackroute.adminService.model.Question;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface QuestionRepository extends MongoRepository<Question,String> {
}
