package com.stackroute.hrservice.model;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.List;

@Document
public class Result {
  @Id
  private String id;
  private String empId;
  private String topicId;
  private String empName;
  private String topicName;
  private double score;
  private double correct;
  private double wrong;
  private String difficulty;
  private List<Attempt> attemptList;

  public Result(String empId, String topicId, String empName, String topicName,
                double score, double correct, double wrong, String difficulty, List<Attempt> attemptList) {
    this.empId = empId;
    this.topicId = topicId;
    this.empName = empName;
    this.topicName = topicName;
    this.score = score;
    this.correct = correct;
    this.wrong = wrong;
    this.attemptList = attemptList;
  }
}

class Attempt{
  private String questionId;
  private String question;
  private String response;
  private String answer;
  private String[] choices;
}

//  private Attempt attempts[
//  private String questionId;
//  private Result result[
//  private String response;
//  private String correct;
//    ]
//      ]
