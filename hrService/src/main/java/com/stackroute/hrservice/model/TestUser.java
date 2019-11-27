package com.stackroute.hrservice.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class TestUser {
    @Id
    private String id;
    private String userId;
    private String topicId;
    private String status;

    public TestUser(String id, String userId, String topicId, String status) {
        this.id = id;
        this.userId = userId;
        this.topicId = topicId;
        this.status = status;
    }
}
