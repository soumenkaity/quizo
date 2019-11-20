package com.stackroute.employeeservice.service;

import com.stackroute.employeeservice.domain.Difficulty;
import com.stackroute.employeeservice.domain.Question;
import com.stackroute.employeeservice.exception.QuestionNotFoundException;
import com.stackroute.employeeservice.repository.QuestionRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

public class FetchQuestionsServiceTest {
    private Question question;

    //Create a mock for UserRepository
    @Mock
    private QuestionRepository questionRepository;

    //Inject the mocks as dependencies into UserServiceImpl
    @InjectMocks
    private FetchQuestionsService fetchQuestionsService = new FetchQuestionsServiceImpl(questionRepository);
    List<Question> list= null;

    @Before
    public void setUp(){
        //Initialising the mock object
        MockitoAnnotations.initMocks(this);
        question= new Question();
        String[] mockOptions = {"Aryan khan" , "Armaan khan" , "zayn Khan" , "Irfan khan"};
        question.setId("5dca5b58eb6ffd1e13f10534");
        question.setQuestion("What is shahrukh khan's first child name?");
        question.setAnswer("Aryan khan");
        question.setOptions(mockOptions);
        question.setDifficulty(Difficulty.E);
        question.setWeight(10);
        list = new ArrayList<>();
        list.add(question);
    }

    @Test
    public void getAllQuestions() throws QuestionNotFoundException {
        questionRepository.save(question);
        //stubbing the mock to return specific data
        when(questionRepository.findAll()).thenReturn(list);
        List<Question> questionList = fetchQuestionsService.getAllQuestions();
        Assert.assertEquals(list,questionList);
    }

    @Test
    public void saveUserTestSuccess() {

        when(questionRepository.save(question)).thenReturn(question);
        Question savedUser = fetchQuestionsService.saveQuestion(question);
        Assert.assertEquals(question,savedUser);


    }




}
