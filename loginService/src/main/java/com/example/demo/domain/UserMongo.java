package com.example.demo.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;

@Data
@Document(collection = "user")
@AllArgsConstructor
@NoArgsConstructor
public class UserMongo {
  @Id
  private String id;
  private String name;
  private String role;
  private double phone;
  private String email;
  private String designation;
  private String address;
  private String gender;

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }
}
