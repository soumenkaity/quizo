package com.stackroute.hrservice.service;

import com.stackroute.hrservice.model.User;
import com.stackroute.hrservice.model.UserLogin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class NotificationService {

    private JavaMailSender javaMailSender;

    @Autowired
    public NotificationService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void sendNotificationForTest(User user) {
        SimpleMailMessage mail=new SimpleMailMessage();
        mail.setTo(user.getEmail());
        mail.setFrom("hariombabug123@gmail.com");
        mail.setSubject("Test Set");
        mail.setText("Your HR has set a test for you \n please attend the test at http://15.206.152.181");

        javaMailSender.send(mail);
    }

  public void sendNotificationForRegistration(UserLogin userLogin) {
    SimpleMailMessage mail=new SimpleMailMessage();
    mail.setTo(userLogin.getEmail());
    mail.setFrom("hariombabug123@gmail.com");
    mail.setSubject("Registered into system");
    mail.setText("Your HR has registered you into the system with the following details \n" +
      "Username: " +userLogin.getUsername()+" Password: "+ userLogin.getPassword()+
      "\n please attend the test at http://15.206.152.181?email="+userLogin.getUsername()+"&password="+ userLogin.getPassword());
    javaMailSender.send(mail);
  }


}
