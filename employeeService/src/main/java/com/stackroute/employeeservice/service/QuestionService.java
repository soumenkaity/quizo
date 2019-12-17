package com.stackroute.employeeservice.service;


import com.mongodb.MongoClient;
import com.stackroute.employeeservice.domain.Attempt;
import com.stackroute.employeeservice.domain.Question;
import com.stackroute.employeeservice.domain.TestUser;
import com.stackroute.employeeservice.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class QuestionService {

  @Value("${spring.data.mongodb.database}")
  public static final String DB_NAME = "AQE";
  @Value("${spring.data.mongodb.host}")
  public static final String MONGO_HOST = "localhost";
  @Value("${spring.data.mongodb.port}")
  public static final int MONGO_PORT = 27017;

  MongoClient mongoClient = new MongoClient(MONGO_HOST,MONGO_PORT);
  MongoOperations mongoOperations = new MongoTemplate(mongoClient, DB_NAME);



  private QuestionRepository  questionRepository;

  @Autowired
  public QuestionService(QuestionRepository questionRepository) {
    this.questionRepository = questionRepository;
  }

  public Question getQuestion(String topicName,String section){
    if(section.equals("E")) return getEasyQuestion(topicName);
    else if(section.equals("M")) return getMediumQuestion(topicName);
    else if(section.equals(("H"))) return getHardQuestion(topicName);

    return null;
  }
  public Question getEasyQuestion(String topicName){
    Query q = new Query(Criteria.where("difficulty").is("E"));
    List<Question> questions = mongoOperations.find(q,Question.class,topicName);
    Question question = questions.get(new Random().nextInt(questions.size()));
    return question;
  }
  public Question getMediumQuestion(String topicName){
    Query q = new Query(Criteria.where("difficulty").is("M"));
    List<Question> questions = mongoOperations.find(q,Question.class,topicName);
    Question question = questions.get(new Random().nextInt(questions.size()));
    return question;
  }
  public Question getHardQuestion(String topicName){
    Query q = new Query(Criteria.where("difficulty").is("H"));
    List<Question> questions = mongoOperations.find(q,Question.class,topicName);
    Question question = questions.get(new Random().nextInt(questions.size()));
    return question;
  }

  public List<Question> saveQuestionAfterTest(String topicName,List<Attempt> answers){

    List<Question> questions = new ArrayList<Question>();
    for(Attempt attempt: answers ){
      Question question = mongoOperations.findById(attempt.getQuestionId(),Question.class,topicName);

      if(question.getAnswer().equals(attempt.getAnswer()))question.incrementCorrect();
      question.incrementTotal();
      if(question.getTotalOccurrences() >= 2){
        if(question.getCTRatio() < 0.3){
          question.setDifficulty("H");
        }
        else if(question.getCTRatio() >= 0.3 && question.getCTRatio() < 0.7){
          question.setDifficulty("M");
        }
        else if(question.getCTRatio() >= 0.7){
          question.setDifficulty("E");
        }
      }
      mongoOperations.save(question,topicName);
      questions.add(question);
    }

    return questions;
  }

  public TestUser saveTestDetails(TestUser testUser){
  testUser.setStatus("C");
  mongoOperations.save(testUser,"testUser");
  return testUser;
  }
}
