package com.stackroute.employeeservice.service;

import com.mongodb.MongoClient;
import com.stackroute.employeeservice.domain.Question;
import com.stackroute.employeeservice.exception.QuestionNotFoundException;
import com.stackroute.employeeservice.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FetchQuestionsServiceImpl implements FetchQuestionsService {

    @Value("${spring.data.mongodb.database}")
    public static final String DB_NAME = "AQE";
    public static final String QUESTION_COLLECTION = "topic_srk";
    @Value("${spring.data.mongodb.host}")
    public static final String MONGO_HOST = "localhost";
    @Value("${spring.data.mongodb.port}")
    public static final int MONGO_PORT = 27017;

    MongoClient mongoClient = new MongoClient(MONGO_HOST,MONGO_PORT);
    MongoOperations mongoOperations = new MongoTemplate(mongoClient, DB_NAME);
    private QuestionRepository questionRepository;

    @Autowired
    public FetchQuestionsServiceImpl(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    @Override
    public List<Question> getAllQuestions() throws QuestionNotFoundException {
        List<Question> questions = mongoOperations.findAll(Question.class, QUESTION_COLLECTION);

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
