package com.stackroute.adminService.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document
public class Topic {
  @Id
  private String id;
  private String name;
  private String createdAt;
  private String link;
  private List<String> keywords;

  public Topic() {
  }

  public Topic(String id, String name, String createdAt, String link, List<String> keywords) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.link = link;
    this.keywords = keywords;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }
}
