package com.stackroute.hrservice.service;

import com.stackroute.hrservice.model.Employee;
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

    public void sendNotification(Employee employee)
    {
        SimpleMailMessage mail=new SimpleMailMessage();
        mail.setTo(employee.getEmail());
        mail.setFrom("hariombabug123@gmail.com");
        mail.setSubject("Testfromhr");
        mail.setText("give a test here  --  http://localhost:4200/auth/login");

        javaMailSender.send(mail);
    }

}
