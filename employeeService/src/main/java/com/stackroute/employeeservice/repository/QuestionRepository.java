package com.stackroute.employeeservice.repository;

import com.stackroute.employeeservice.domain.Question;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends MongoRepository<Question,Integer> {

}
