package com.stackroute.employeeservice.repository;

import com.stackroute.employeeservice.domain.Result;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ResultRepository extends MongoRepository<Result, String> {
    public List<Result> findByTestId(String id);
    public List<Result> findByEmpId(String id);
}
