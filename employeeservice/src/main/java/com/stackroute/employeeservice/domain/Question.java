package com.stackroute.employeeservice.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
@NoArgsConstructor
@AllArgsConstructor
public class Question {
    @Id
    private String id;
    private String question;
    private String answer;
    private String[] options=new String[4];
    private Difficulty difficulty;
    private int weight;

}
