package com.stackroute.hrservice.model;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.List;

@Document
public class Result {
  @Id
  private String id;
  private String empId;
  private String testId;
  private String empName;
  private String testName;
  private double score;
  private double correct;
  private double wrong;
  private String difficulty;
  private List<Attempt> attemptList;

  public Result(String id, String empId, String testId, String empName, String testName, double score,
                double correct, double wrong, String difficulty, List<Attempt> attemptList) {
    this.id = id;
    this.empId = empId;
    this.testId = testId;
    this.empName = empName;
    this.testName = testName;
    this.score = score;
    this.correct = correct;
    this.wrong = wrong;
    this.difficulty = difficulty;
    this.attemptList = attemptList;
  }
}

class Attempt{
  private String questionId;
  private Response response;

  public Attempt(String questionId, Response response) {
    this.questionId = questionId;
    this.response = response;
  }
}

class Response{
  private String response;
  private String correct;

  public Response(String response, String correct) {
    this.response = response;
    this.correct = correct;
  }
}
//  private Attempt attempts[
//  private String questionId;
//  private Result result[
//  private String response;
//  private String correct;
//    ]
//      ]
