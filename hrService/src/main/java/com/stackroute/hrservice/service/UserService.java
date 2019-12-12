package com.stackroute.hrservice.service;

import com.stackroute.hrservice.model.User;
import com.stackroute.hrservice.model.UserLogin;
import com.stackroute.hrservice.repository.UserLoginRepository;
import com.stackroute.hrservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

  private UserRepository userRepository;
  private UserLoginRepository userLoginRepository;
  private PasswordEncoder bcryptEncoder;
  private NotificationService notificationService;

  @Autowired
  public UserService(UserRepository userRepository, UserLoginRepository userLoginRepository, PasswordEncoder bcryptEncoder, NotificationService notificationService) {
    this.userRepository = userRepository;
    this.userLoginRepository = userLoginRepository;
    this.bcryptEncoder = bcryptEncoder;
    this.notificationService = notificationService;
  }

  public List<User> getAllUsers(){ return  userRepository.findAll();}
  public List<User> getAllUsersEmp(){return userRepository.findByRole("EMP");}
  public User getUserById(String id){ return userRepository.findById(id).orElseThrow(()->new RuntimeException());}

  public User updateUser(User user){return userRepository.save(user);}
  public void deleteUser(User user){userRepository.delete(user);}

  public User addUserToMongo(User user){ return userRepository.save(user); }
  public UserLogin addUserToMyqsl(UserLogin userLogin){
    notificationService.sendNotificationForRegistration(userLogin);
    userLogin.setPassword(bcryptEncoder.encode(userLogin.getPassword()));
    return userLoginRepository.save(userLogin);
  }

  public String generateUserNameAndPass(){return "User_"+GenerationService.generateRandomString(4)+","+"Pass_"+GenerationService.generateRandomString(4);}
}
