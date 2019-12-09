package com.stackroute.adminService.repository;

import com.stackroute.adminService.model.Request;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface RequestRepository extends MongoRepository<Request,String> {
    public List<Request> findByStatus(String status);
}
