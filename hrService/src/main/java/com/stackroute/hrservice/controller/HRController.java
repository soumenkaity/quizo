package com.stackroute.hrservice.controller;

import com.stackroute.hrservice.model.Request;
import com.stackroute.hrservice.model.TestUser;
import com.stackroute.hrservice.model.User;
import com.stackroute.hrservice.model.UserLogin;
import com.stackroute.hrservice.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hr")
@CrossOrigin("*")
public class HRController {
  private HRService hrService;
  private UserService userService;
  private ResultService resultService;
  private RequestService requestService;

  @Autowired
  public HRController(HRService hrService, UserService userService, ResultService resultService, RequestService requestService) {
    this.hrService = hrService;
    this.userService = userService;
    this.resultService = resultService;
    this.requestService = requestService;
  }


  //---------------------------------------ALL USER MAPPINGS------------------------------------------------

  @GetMapping("/users")
  public ResponseEntity getAllUsers(){return new ResponseEntity(userService.getAllUsersEmp(), HttpStatus.OK); }
  @GetMapping("/users/{id}")
  public ResponseEntity getUserById(@PathVariable String id){return new ResponseEntity(userService.getUserById(id), HttpStatus.OK); }
  @GetMapping("/users/generate")
  public ResponseEntity generateUserNameAndPass(){return new ResponseEntity(userService.generateUserNameAndPass(), HttpStatus.OK);}
  @PostMapping("/users")
  public ResponseEntity addUserToMongo(@RequestBody User user){return new ResponseEntity(userService.addUserToMongo(user), HttpStatus.OK); }
  @PostMapping("/users/m")
  public ResponseEntity addUserToMysql(@RequestBody UserLogin userLogin){return new ResponseEntity(userService.addUserToMyqsl(userLogin), HttpStatus.OK); }
  @PutMapping("/users")
  public ResponseEntity updateUser(@RequestBody User user){return new ResponseEntity(userService.updateUser(user), HttpStatus.OK); }
  @DeleteMapping("/users")
  public ResponseEntity<String> deleteUser(@RequestBody User user){userService.deleteUser(user);return new ResponseEntity<>("User deleted", HttpStatus.OK); }

  //--------------------------------------------------------------------------------------------------------

  //---------------------------------------ALL TOPIC MAPPINGS-----------------------------------------------
  @GetMapping("/topics")
  public ResponseEntity getAllTests(){
    return new ResponseEntity(hrService.getAllTopics(), HttpStatus.OK);
  }
  @GetMapping("/topics/{id}")
  public ResponseEntity getTestById(@PathVariable String id){
    return new ResponseEntity(hrService.getTopicById(id), HttpStatus.OK);
  }
  //--------------------------------------------------------------------------------------------------------

  //---------------------------------------ALL RESULT MAPPINGS-----------------------------------------------
  @GetMapping("/results")
  public ResponseEntity getAllResults(){
    return new ResponseEntity(resultService.getAllResults(), HttpStatus.OK);
  }
  @GetMapping("/result/{id}")
  public ResponseEntity getByTestId(@PathVariable String id){
    return new ResponseEntity(resultService.findById(id), HttpStatus.OK);
  }
  @GetMapping("/results/e/{id}")
  public ResponseEntity getEmpById(@PathVariable String id){
    return new ResponseEntity(resultService.getResultsByEmpId(id), HttpStatus.OK);
  }
  @GetMapping("/result")
  public ResponseEntity getResultByTestIdAndEmpId(@RequestParam String testId,@RequestParam String empId)
  {return new ResponseEntity(resultService.getResultByTestIdAndEmpId(testId,empId), HttpStatus.OK); }
  //--------------------------------------------------------------------------------------------------------

  //---------------------------------------TEST CREATION MAPPINGS-------------------------------------------
  @GetMapping("/assigned")
  public ResponseEntity getAssignedTests(){ return new ResponseEntity(hrService.getAllTestsAssigned(),HttpStatus.OK); }
  @GetMapping("/assigned/t")
  public ResponseEntity getTestsByTopic(@RequestParam String topic){ return new ResponseEntity(hrService.getTestsByTopic(topic),HttpStatus.OK); }
  @GetMapping("/assigned/s")
  public ResponseEntity getAllTestsByStatus(@RequestParam String status){ return new ResponseEntity(hrService.getAllTestsByStatus(status),HttpStatus.OK); }
  @PostMapping("/assign")
  public ResponseEntity assignTest(@RequestBody List<TestUser> testUser){ return new ResponseEntity(hrService.addTest(testUser),HttpStatus.OK); }
  @DeleteMapping("/assign")
  public ResponseEntity deleteTest(@RequestBody TestUser testUser){hrService.deleteTest(testUser); return new ResponseEntity("Test Deleted",HttpStatus.OK); }

  //--------------------------------------------------------------------------------------------------------

  //---------------------------------------REQUEST MAPPINGS---------------------------------------------------
  @GetMapping("/request")
  public ResponseEntity getAllRequests(){ return new ResponseEntity(requestService.getAllRequests(), HttpStatus.OK); }
  @GetMapping("/request/{id}")
  public ResponseEntity getRequestById(@PathVariable String id){ return new ResponseEntity(requestService.getRequestById(id), HttpStatus.OK); }

  @PostMapping("/request")
  public ResponseEntity addRequest(@RequestBody Request request){ return new ResponseEntity(requestService.addRequest(request), HttpStatus.OK); }

  @DeleteMapping("/request")
  public ResponseEntity deleteRequest(@RequestBody Request request){
    requestService.deleteRequest(request);
    return new ResponseEntity("Request Deleted", HttpStatus.OK);
  }

  //--------------------------------------------------------------------------------------------------------
}
