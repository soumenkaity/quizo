package com.stackroute.adminService.service;

import com.stackroute.adminService.model.User;
import com.stackroute.adminService.model.UserLogin;
import com.stackroute.adminService.repository.UserLoginRepository;
import com.stackroute.adminService.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.ListIterator;

@Service
public class UserService {
  private UserRepository userRepository;
  @Autowired
  private UserLoginRepository userLoginRepository;


  @Autowired
  public UserService(UserRepository userRepository, UserLoginRepository userLoginRepository) {
    this.userRepository = userRepository;
    this.userLoginRepository = userLoginRepository;
  }


  public List<User> getAllUsers(){ return userRepository.findAll();}
  public List<User> insertUsersInBulk(List<User> userList){
    for(User user: userList){
      userRepository.save(user);
      userLoginRepository.save(new UserLogin(user.getName(),"password",user.getEmail(),user.getRole()));
    }
    return userList;
  }
  public User insertUser(User user){
    return userRepository.save(user);
  }
  public String deleteUser(User user){
    userRepository.delete(user);
    return "user deleted";
  }
}
