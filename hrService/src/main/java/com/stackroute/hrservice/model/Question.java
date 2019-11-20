package com.stackroute.hrservice.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Question {
  @Id
  private String id;
  private String question;
  private String answer;
  private String[] choices;
  private Difficulty difficulty;
  private int score;
  private int weight;

  public Question() {
  }

  public Question(String question, String answer, String[] choices, Difficulty difficulty, int score, int weight) {
    this.question = question;
    this.answer = answer;
    this.choices = choices;
    this.difficulty = difficulty;
    this.score = score;
    this.weight = weight;
  }
}


enum Difficulty {
  E,M,H
}
