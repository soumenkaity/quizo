package com.stackroute.hrservice.service;

import com.stackroute.hrservice.model.Request;
import com.stackroute.hrservice.repository.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RequestService {
  private RequestRepository requestRepository;

  @Autowired
  public RequestService(RequestRepository requestRepository) {
    this.requestRepository = requestRepository;
  }

  public List<Request> getAllRequests(){ return  requestRepository.findAll();}
  public Request getRequestById(String id){ return requestRepository.findById(id).orElseThrow(()->new RuntimeException());}
  public Request addRequest(Request request){return requestRepository.save(request);}
  public void deleteRequest(Request request){ requestRepository.delete(request);}
}
