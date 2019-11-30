package com.stackroute.employeeservice.service;

import com.stackroute.employeeservice.domain.Result;
import com.stackroute.employeeservice.repository.ResultRepository;
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
        return resultRepository.findByTestId(id);
    }

    public List<Result> getResultsByEmpId(String id){
        return resultRepository.findByEmpId(id);
    }

}
