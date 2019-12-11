package com.stackroute.adminService.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name="users")
@Data
@Builder
@AllArgsConstructor
public class UserLogin {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  Integer id;

  @NotEmpty
  private String username;

  @NotEmpty
  private String password;

  @NotEmpty
  private String email;

  @NotEmpty
  private String role;

  public UserLogin() {

  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getRole() {
    return role;
  }

  public void setRole(String role) {
    this.role = role;
  }

  public UserLogin(@NotEmpty String username, @NotEmpty String password, @NotEmpty String email, @NotEmpty String role) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.role = role;
  }


}
