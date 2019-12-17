package com.stackroute.employeeservice.domain;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@Document
public class Question {
    @Id
    private String id;
    private String question;
    private String answer;
    private String sentence;
    private double score;
    private String[] choices =new String[4];
    private String difficulty;
    private int correctAttempts;
    private int totalOccurrences;

    public Question(String id, String question, String answer, String sentence, double score, String[] choices, String difficulty, int correctAttempts, int totalOccurrences) {
        this.id = id;
        this.question = question;
        this.answer = answer;
        this.sentence = sentence;
        this.score = score;
        this.choices = choices;
        this.difficulty = difficulty;
        this.correctAttempts = correctAttempts;
        this.totalOccurrences = totalOccurrences;
    }

    public Question() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String[] getChoices() {
        return choices;
    }

    public void setChoices(String[] choices) {
        this.choices = choices;
    }

    public String getSentence() {
        return sentence;
    }

    public void setSentence(String sentence) {
        this.sentence = sentence;
    }

    public double getScore() {
        return score;
    }

    public void setScore(double score) {
        this.score = score;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    public int getCorrectAttempts() {
        return correctAttempts;
    }

    public void setCorrectAttempts(int correctAttempts) {
        this.correctAttempts = correctAttempts;
    }

    public int getTotalOccurrences() {
        return totalOccurrences;
    }

    public void setTotalOccurrences(int totalOccurrences) {
        this.totalOccurrences = totalOccurrences;
    }

    public void incrementCorrect(){this.correctAttempts++;}
    public void incrementTotal(){this.totalOccurrences++;}
    public double getCTRatio(){return  this.correctAttempts/Double.valueOf(this.totalOccurrences);}
}
