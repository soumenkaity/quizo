package com.stackroute.employeeservice.service;

import com.stackroute.employeeservice.domain.Question;
import com.stackroute.employeeservice.exception.QuestionNotFoundException;
import com.stackroute.employeeservice.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FetchQuestionsServiceImpl implements FetchQuestionsService {
    private QuestionRepository questionRepository;

    @Autowired
    public FetchQuestionsServiceImpl(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    @Override
    public List<Question> getAllQuestions() throws QuestionNotFoundException {
        List<Question> questions = questionRepository.findAll();
        if (questions.size() == 0){
            throw new QuestionNotFoundException("No questions were found");
        }
        return questions;
    }

    @Override
    public Question saveQuestion(Question question) {
        Question savedQuestion = questionRepository.save(question);
        return savedQuestion;
    }
}
