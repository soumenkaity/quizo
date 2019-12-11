package com.stackroute.adminService.controller;


import com.stackroute.adminService.model.User;
import com.stackroute.adminService.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/admin/users")
public class UserController {

  private UserService userService;

  @Autowired
  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping("")
  public ResponseEntity getAllUsers(){ return new ResponseEntity(userService.getAllUsers(), HttpStatus.OK);}

  @PostMapping("")
  public ResponseEntity insertUser(@RequestBody User user){return new ResponseEntity(userService.insertUser(user), HttpStatus.OK);}

  @PostMapping("/bulk")
  public ResponseEntity insertUserInBulk(@RequestBody List<User> user){return new ResponseEntity(userService.insertUsersInBulk(user), HttpStatus.OK);}

  @DeleteMapping("")
  public ResponseEntity deleteUser(@RequestBody User user){return new ResponseEntity(userService.deleteUser(user), HttpStatus.OK);}
}
