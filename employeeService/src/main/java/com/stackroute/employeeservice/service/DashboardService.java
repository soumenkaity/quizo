package com.stackroute.employeeservice.service;

import com.stackroute.employeeservice.domain.TestUser;
import com.stackroute.employeeservice.repository.TestUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DashboardService {

  private TestUserRepository testUserRepository;

  @Autowired
  public DashboardService(TestUserRepository testUserRepository) {
    this.testUserRepository = testUserRepository;
  }
  public TestUser getGetEmpDetails(String email){ return  testUserRepository.findByUserEmail(email); }
  public List<TestUser> getActiveTests(String userId){ return testUserRepository.findByUserIdAndStatus(userId,"N");}
  public List<TestUser> getCompletedTests(String userId){ return testUserRepository.findByUserIdAndStatus(userId,"C");}
  public List<TestUser> getActiveTestsByEmail(String userId){ return testUserRepository.findByUserEmailAndStatus(userId,"N");}
  public List<TestUser> getCompletedTestsByEmail(String userId){ return testUserRepository.findByUserEmailAndStatus(userId,"C");}
}
