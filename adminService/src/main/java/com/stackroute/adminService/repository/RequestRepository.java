package com.stackroute.adminService.repository;

import com.stackroute.adminService.model.Request;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RequestRepository extends MongoRepository<Request,String> {
}
