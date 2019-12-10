package com.stackroute.employeeservice.service;

import com.stackroute.employeeservice.domain.Result;

import java.util.List;

public interface ResultService {
    public List<Result> getResultsByTopicId(String id);
    public List<Result> getResultsByEmpId(String id);
    public List<Result> getResultsByTestId(String id);
    public Result saveResult(Result result);
    public Result getResultsById(String id);
    public Result getResultByTestIdAndEmpId(String testId,String empId);
    public void deleteResult();
    public List<Result> getAllResults();
}
