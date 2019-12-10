package com.stackroute.hrservice.service;

import com.stackroute.hrservice.model.Result;
import com.stackroute.hrservice.repository.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResultService {
  private ResultRepository resultRepository;

  @Autowired
  public ResultService(ResultRepository resultRepository) {
    this.resultRepository = resultRepository;
  }

  public List<Result> getAllResults(){
    return resultRepository.findAll();
  }

  public List<Result> getResultsByTestId(String id){
    return resultRepository.findByTopicId(id);
  }

  public List<Result> getResultsByEmpId(String id){
    return resultRepository.findByEmpId(id);
  }

  public Result getResultByTestIdAndEmpId(String testId, String empId) {
    return resultRepository.findByTestIdAndEmpId(testId,empId);
  }

  public Result findById(String id) {return  resultRepository.findById(id).orElseThrow(()->new RuntimeException()); }
}
