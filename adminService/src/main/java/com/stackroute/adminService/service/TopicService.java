package com.stackroute.adminService.service;

import com.mongodb.MongoClient;
import com.mongodb.util.JSON;
import com.stackroute.adminService.model.Question;
import com.stackroute.adminService.model.Topic;
import com.stackroute.adminService.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.awt.print.Pageable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class TopicService {
  @Autowired
  private TopicRepository topicRepository;

  @Value("${spring.data.mongodb.database}")
  public static final String DB_NAME = "AQE";
  @Value("${spring.data.mongodb.host}")
  public static final String MONGO_HOST = "localhost";
  @Value("${spring.data.mongodb.port}")
  public static final int MONGO_PORT = 27017;

  MongoClient mongoClient = new MongoClient(MONGO_HOST,MONGO_PORT);
  MongoOperations mongoOperations = new MongoTemplate(mongoClient, DB_NAME);
  //---------------------------------------------TOPIC-------------------------------------------------------
  public List<Topic> getAllTopics(){return topicRepository.findAll();}
  public Topic getTopicById(String id){return topicRepository.findById(id).orElseThrow(()->new RuntimeException());}
  public Topic updateTopic(Topic topic){return topicRepository.save(topic);}
  public String deleteTopic(String topic){ mongoOperations.dropCollection(topic);topicRepository.delete(topicRepository.findByName(topic));return "topic deleted form database";}
  public Topic insertTopic(Topic topic){return topicRepository.save(topic);}

  //---------------------------------------------QUESTIONS----------------------------------------------------
  public List<Question> getAllQuestionsOfTopic(String topicName){return mongoOperations.findAll(Question.class,topicName);}

  public List<Question> getPageOfQuestions(String topicName, int page){
    Query query = new Query().with(PageRequest.of(page-1,40));
    return mongoOperations.find(query,Question.class,topicName);
  }
  public Question getSingleQuestionsOfTopic(String topicName,String id){
    Query searchQuery = new Query(Criteria.where("_id").is(id));
    return (Question) mongoOperations.findOne(searchQuery,Question.class,topicName);
  }

  public List<Question> getQuestionsOfTopicByDifficulty(String topicName,String difficulty){
    Query searchQuery = new Query(Criteria.where("difficulty").is(difficulty));
    return  mongoOperations.find(searchQuery,Question.class,topicName);
  }


  public Question updateSingleQuestionsOfTopic(String topicName,Question question){
    return (Question) mongoOperations.save(question,topicName);
  }

  public Map<String,String> getMetadata(String topicName){
    Map<String,String> returnObject = new HashMap<String,String>();
    Query EDifficulty = new Query(Criteria.where("difficulty").is('E'));
    Query MDifficulty = new Query(Criteria.where("difficulty").is('M'));
    Query HDifficulty = new Query(Criteria.where("difficulty").is('H'));
    Query count = new Query();
    long eCount = mongoOperations.count(EDifficulty,Question.class,topicName);
    long mCount = mongoOperations.count(MDifficulty,Question.class,topicName);
    long hCount = mongoOperations.count(HDifficulty,Question.class,topicName);
    long allCount = mongoOperations.count(count,Question.class,topicName);
    returnObject.put("easyQuestionCount",""+eCount);
    returnObject.put("mediumQuestionCount",""+mCount);
    returnObject.put("hardQuestionCount",""+hCount);
    returnObject.put("questionCount",""+allCount);
    return returnObject;
  }

  public Map<String,String> reshuffle(String topicName,int easyCount,int mediumCount){
    //cant figure out why updateMulti did not work
    List<Question> allQuestions = getAllQuestionsOfTopic(topicName);
    for(int i = 0; i < 200;i++){
      Question question = allQuestions.get(i);
      question.setTotalOccurrences(0);question.setCorrectAttempts(0);
      if(i < easyCount){ question.setDifficulty("E"); }
      else if(i >= easyCount && i < easyCount+mediumCount ){ question.setDifficulty("M"); }
      else{ question.setDifficulty("H"); }
      mongoOperations.save(question,topicName);
    }
    return getMetadata(topicName);
  }

  public String insertQuestionsInTopic(String topicName, List<Question> questions){
    for(Question question:questions)mongoOperations.save(question,topicName);
    return "Sucessfully inserted";
  }


}
