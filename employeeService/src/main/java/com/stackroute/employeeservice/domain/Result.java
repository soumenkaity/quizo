package com.stackroute.employeeservice.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
public class Result {
    @Id
    private String id;
    private String empId;
    private String testId;
    private String topicId;
    private String empName;
    private String topicName;
    private double score;
    private double correct;
    private double wrong;
    private List<Attempt> attempts;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmpId() {
        return empId;
    }

    public void setEmpId(String empId) {
        this.empId = empId;
    }

    public String getTopicId() {
        return topicId;
    }

    public void setTopicId(String topicId) {
        this.topicId = topicId;
    }

    public String getEmpName() {
        return empName;
    }

    public void setEmpName(String empName) {
        this.empName = empName;
    }

    public String getTopicName() {
        return topicName;
    }

    public void setTopicName(String topicName) {
        this.topicName = topicName;
    }

    public double getScore() {
        return score;
    }

    public void setScore(double score) {
        this.score = score;
    }

    public double getCorrect() {
        return correct;
    }

    public void setCorrect(double correct) {
        this.correct = correct;
    }

    public double getWrong() {
        return wrong;
    }

    public void setWrong(double wrong) {
        this.wrong = wrong;
    }

    public List<Attempt> getAttempts() {
        return attempts;
    }

    public void setAttempts(List<Attempt> attempts) {
        this.attempts = attempts;
    }

    public String getTestId() {
        return testId;
    }

    public void setTestId(String testId) {
        this.testId = testId;
    }

    public Result(String id, String empId, String testId, String topicId, String empName, String topicName, double score, double correct, double wrong, List<Attempt> attempts) {
        this.id = id;
        this.empId = empId;
        this.testId = testId;
        this.topicId = topicId;
        this.empName = empName;
        this.topicName = topicName;
        this.score = score;
        this.correct = correct;
        this.wrong = wrong;
        this.attempts = attempts;
    }

    public Result() {
    }
}
