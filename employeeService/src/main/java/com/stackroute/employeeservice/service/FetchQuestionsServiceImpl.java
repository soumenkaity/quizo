package com.stackroute.employeeservice.service;

import com.mongodb.MongoClient;
import com.stackroute.employeeservice.domain.Question;
import com.stackroute.employeeservice.domain.Result;
import com.stackroute.employeeservice.exception.QuestionNotFoundException;
import com.stackroute.employeeservice.repository.QuestionRepository;
import com.stackroute.employeeservice.repository.ResultRepository;
import com.stackroute.employeeservice.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FetchQuestionsServiceImpl implements FetchQuestionsService {

    @Value("${spring.data.mongodb.database}")
    public static final String DB_NAME = "AQE";
    @Value("${spring.data.mongodb.host}")
    public static final String MONGO_HOST = "localhost";
    @Value("${spring.data.mongodb.port}")
    public static final int MONGO_PORT = 27017;

    MongoClient mongoClient = new MongoClient(MONGO_HOST,MONGO_PORT);
    MongoOperations mongoOperations = new MongoTemplate(mongoClient, DB_NAME);

    private ResultRepository resultRepository;
    Result result;

    private TopicRepository topicRepository;

    private QuestionRepository questionRepository;
    List<Question> questions;
    List<Question> easyQuestions = new ArrayList<Question>();
    List<Question> mediumQuestions = new ArrayList<Question>();
    List<Question> hardQuestions = new ArrayList<Question>();

    int easyIndex;
    int mediumIndex;
    int hardIndex;

    int correctEasy;
    int correctMedium;
    int correctHard;

    boolean inEasy;
    boolean inMedium;
    boolean inHard;

    int totalAskedInSections = 10;
    int needPassedInEasy = 6;
    int needPassedInMedium = 5;
    int needPassedInHard = 4;

    float totalMarksInEasy = 30;
    float totalMarksInMedium = 30;
    float totalMarksInHard = 40;

    @Autowired
    public FetchQuestionsServiceImpl(QuestionRepository questionRepository, ResultRepository resultRepository) {
        this.questionRepository = questionRepository;
        this.resultRepository = resultRepository;
    }

    @Override
    public Question getFirstQuestion(String collectionName, String empId, String empName) throws QuestionNotFoundException {
        questions = mongoOperations.findAll(Question.class, collectionName);
        if (questions.size() == 0){
            throw new QuestionNotFoundException("No questions were found");
        }

        for(Question question: questions){
            if(question.getDifficulty().equals("E"))
                easyQuestions.add(question);
            else if(question.getDifficulty().equals("M"))
                mediumQuestions.add(question);
            else if(question.getDifficulty().equals("H"))
                hardQuestions.add(question);
        }

        easyIndex = 0;
        correctEasy = 0;
        inEasy = true;
        inMedium = false;
        inHard = false;
        return easyQuestions.get(easyIndex);
    }

    @Override
    public Question getNextQuestion(int response) throws QuestionNotFoundException{
        if(inEasy && !inMedium && !inHard)
            return easyQuestion(response);

        return new Question();
    }

    public Question easyQuestion(int response) throws QuestionNotFoundException{
        easyIndex = easyIndex + 1;
        if(easyQuestions.get(easyIndex).getAnswer().equals(easyQuestions.get(easyIndex).getChoices()[response]))
            correctEasy = correctEasy + 1;

        if(easyIndex < totalAskedInSections && correctEasy < needPassedInEasy)
            return easyQuestions.get(easyIndex);
        else if(easyIndex >= totalAskedInSections && correctEasy < needPassedInEasy){}

      return new Question();
    }
}
