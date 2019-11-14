package com.stackroute.employeeservice.service;

import com.stackroute.employeeservice.domain.Topic;
import com.stackroute.employeeservice.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FetchTopicService {
    @Autowired
    private TopicRepository topicRepository;


    public FetchTopicService(TopicRepository topicRepository) {
        this.topicRepository = topicRepository;
    }

    public List<Topic> getAllTopics(){
        return topicRepository.findAll();
    }
}
