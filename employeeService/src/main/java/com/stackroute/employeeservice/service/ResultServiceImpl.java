package com.stackroute.employeeservice.service;

import com.stackroute.employeeservice.domain.Result;
import com.stackroute.employeeservice.repository.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResultServiceImpl implements ResultService {
    private ResultRepository resultRepository;

    @Autowired
    public ResultServiceImpl(ResultRepository resultRepository) {
        this.resultRepository = resultRepository;
    }


    @Override
    public List<Result> getResultsByTopicId(String id) {
        return resultRepository.findByTopicId(id);
    }

    @Override
    public List<Result> getResultsByEmpId(String id) {
        return resultRepository.findByEmpId(id);
    }

    @Override
    public List<Result> getResultsByTestId(String id) { return resultRepository.findByTestId(id); }

    @Override
    public Result saveResult(Result result) {
        return resultRepository.save(result);
    }


}
