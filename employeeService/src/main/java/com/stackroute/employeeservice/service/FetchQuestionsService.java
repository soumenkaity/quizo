package com.stackroute.employeeservice.service;

import com.stackroute.employeeservice.domain.Question;
import com.stackroute.employeeservice.exception.QuestionNotFoundException;

import java.util.List;

public interface FetchQuestionsService {
    public List<Question> getAllQuestions() throws QuestionNotFoundException;
    public Question saveQuestion(Question question);
}
