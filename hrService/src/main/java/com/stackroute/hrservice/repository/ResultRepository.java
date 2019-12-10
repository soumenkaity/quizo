package com.stackroute.hrservice.repository;

import com.stackroute.hrservice.model.Result;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ResultRepository extends MongoRepository<Result,String> {
  public List<Result> findByTopicId(String id);
  public List<Result> findByEmpId(String id);
  public Result findByTestIdAndEmpId(String testId,String empId);
}
