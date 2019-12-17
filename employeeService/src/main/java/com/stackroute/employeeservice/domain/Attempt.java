package com.stackroute.employeeservice.domain;

public class Attempt {
    private String questionId;
    private String question;
    private String response;
    private String answer;
    private String difficulty;
    private String[] choices;

    public String getQuestionId() {
        return questionId;
    }

    public void setQuestionId(String questionId) {
        this.questionId = questionId;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
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

    public String getDifficulty() {
      return difficulty;
    }

    public void setDifficulty(String difficulty) {
      this.difficulty = difficulty;
    }

  public Attempt(String questionId, String question, String response, String answer, String[] choices) {
        this.questionId = questionId;
        this.question = question;
        this.response = response;
        this.answer = answer;
        this.choices = choices;
    }

    public Attempt() {
    }
}
