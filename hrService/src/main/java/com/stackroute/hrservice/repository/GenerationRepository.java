package com.stackroute.hrservice.repository;

import com.stackroute.hrservice.model.EmployeeLogin;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface GenerationRepository extends MongoRepository<EmployeeLogin, String> {
}
