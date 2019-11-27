package com.stackroute.hrservice.service;

import com.stackroute.hrservice.model.Employee;
import com.stackroute.hrservice.model.EmployeeLogin;
import com.stackroute.hrservice.repository.GenerationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationService extends GenerationService {

    private JavaMailSender javaMailSender;
    char[] username=geek_username(8);
    char [] password=geek_Password(8);

    @Autowired
    private GenerationRepository generationRepository;

    @Autowired
    public NotificationService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public List<EmployeeLogin> getAllEmployeelogin(){ return generationRepository.findAll();}

    public void sendNotification(Employee employee)
    {
        EmployeeLogin userTest = new EmployeeLogin();
        userTest.setPassword(password);
        userTest.setUsername(username);
        generationRepository.save(userTest);
        SimpleMailMessage mail=new SimpleMailMessage();
        mail.setTo(employee.getEmail());
        mail.setFrom("hariombabug123@gmail.com");
        mail.setSubject("Testfromhr");
        mail.setText("give a test here  --  http://localhost:4200/auth/login Here ar your credentials username:" +username +"password:"+password);

        javaMailSender.send(mail);
    }

}
