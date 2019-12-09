package com.stackroute.employeeservice.domain;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Document
public class TestUser {
  @Id
  private String id;
  private String testId;
  private String userId;
  private String userEmail;
  private String userName;
  private String topicId;
  private String topicName;
  private String status;
  private Date createdAt;

  public TestUser(String testId, String userId, String userEmail, String userName, String topicId, String topicName, String status, Date createdAt) {
    this.testId = testId;
    this.userId = userId;
    this.userEmail = userEmail;
    this.userName = userName;
    this.topicId = topicId;
    this.topicName = topicName;
    this.status = status;
    this.createdAt = createdAt;
  }

  public TestUser() {
  }

  public String getUserId() {
    return userId;
  }

  public void setUserId(String userId) {
    this.userId = userId;
  }

  public String getTopicId() {
    return topicId;
  }

  public void setTopicId(String topicId) {
    this.topicId = topicId;
  }

  public String getTopicName() {
    return topicName;
  }

  public void setTopicName(String topicName) {
    this.topicName = topicName;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public Date getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(Date createdAt) {
    this.createdAt = createdAt;
  }
  public String getUserEmail() { return userEmail; }

  public void setUserEmail(String userEmail) { this.userEmail = userEmail; }

  public String getTestId() {
    return testId;
  }

  public void setTestId(String testId) {
    this.testId = testId;
  }
}
