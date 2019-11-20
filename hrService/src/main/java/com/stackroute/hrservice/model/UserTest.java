package com.stackroute.hrservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Data
@Document
public class UserTest {

  @Id
  private String id;
  private String testName;
  private Date createdAt;
  private Date expiresAt;
  private String topicId;
  private String topicName;
  private List<Users> users;

  public UserTest(String testName, Date createdAt, Date expiresAt, String topicId, String topicName) {
    this.testName = testName;
    this.createdAt = createdAt;
    this.expiresAt = expiresAt;
    this.topicId = topicId;
    this.topicName = topicName;
  }
}

@Data
@NoArgsConstructor
@AllArgsConstructor
class Users{
  private String id;
  private String status;
}

