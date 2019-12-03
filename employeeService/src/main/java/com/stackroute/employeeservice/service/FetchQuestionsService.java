package com.stackroute.employeeservice.service;

import com.stackroute.employeeservice.domain.Question;
import com.stackroute.employeeservice.exception.QuestionNotFoundException;

public interface FetchQuestionsService {
    public Question getFirstQuestion(String collectionName, String empId, String empName) throws QuestionNotFoundException;

    public Question getNextQuestion(int response) throws QuestionNotFoundException;
}
