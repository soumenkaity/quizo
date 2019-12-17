package com.stackroute.employeeservice.service;

import com.stackroute.employeeservice.domain.Question;
import com.stackroute.employeeservice.exception.QuestionNotFoundException;

import java.util.List;

public interface FetchQuestionsService {
    public Question getFirstQuestion(String id,String testId, String collectionName, String empId, String empName) throws QuestionNotFoundException;

    public List<Object> getNextQuestion(int response) throws QuestionNotFoundException;
}
