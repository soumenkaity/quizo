package com.stackroute.employeeservice.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class TestResult {
    @Id
    private String testId;
    private String employeeId;
    private Response[] testResponses;
    private int correct;
    private int incorrect;
    private int score;
    private double percentage;

    public TestResult(String employeeId, String testId, Response[] testResponses, int correct, int incorrect, int score, double percentage) {
        this.employeeId = employeeId;
        this.testId = testId;
        this.testResponses = testResponses;
        this.correct = correct;
        this.incorrect = incorrect;
        this.score = score;
        this.percentage = percentage;
    }

    public TestResult() {
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }

    public String getTestId() {
        return testId;
    }

    public void setTestId(String testId) {
        this.testId = testId;
    }

    public Response[] getTestResponses() {
        return testResponses;
    }

    public void setTestResponses(Response[] testResponses) {
        this.testResponses = testResponses;
    }

    public int getCorrect() {
        return correct;
    }

    public void setCorrect(int correct) {
        this.correct = correct;
    }

    public int getIncorrect() {
        return incorrect;
    }

    public void setIncorrect(int incorrect) {
        this.incorrect = incorrect;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public double getPercentage() {
        return percentage;
    }

    public void setPercentage(double percentage) {
        this.percentage = percentage;
    }
}
