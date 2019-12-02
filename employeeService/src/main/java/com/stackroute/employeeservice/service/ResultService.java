package com.stackroute.employeeservice.service;

import com.stackroute.employeeservice.domain.Result;
import com.stackroute.employeeservice.repository.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ResultService {


     public List<Result> getResultsByTopicId(String id);
     public List<Result> getResultsByEmpId(String id);
     public Result saveResult(Result result);
}
