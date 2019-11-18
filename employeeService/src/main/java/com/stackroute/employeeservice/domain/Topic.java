package com.stackroute.employeeservice.domain;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document
@NoArgsConstructor
public class Topic {
    @Id
    private String id;
    private String name;
    private List<Question> questions;
    private String createdAt;
    private String link;

    public Topic(String name, List<Question> questions, String createdAt, String link) {
        this.name = name;
        this.questions = questions;
        this.createdAt = createdAt;
        this.link = link;
    }
}
