package com.example.demo.web;

import com.example.demo.domain.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.jwt.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthenticationController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    JwtTokenProvider jwtTokenProvider;

    @Autowired
    UserRepository users;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @PostMapping("/signin")
    public ResponseEntity signin(@RequestBody AuthenticationRequest data) {
        try {
            String username = data.getUsername();
            String password = data.getPassword();
            String role = this.users.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("Username " + username + "not found")).getRole();
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
            String token = jwtTokenProvider.createToken(username, role );
            Map<Object, Object> model = new HashMap<>();
            model.put("username", username);
            model.put("role",role);
            model.put("token", token);
            return ok(model);
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Invalid username/password supplied");
        }
    }


    @PostMapping("/register")
    public ResponseEntity register(@RequestBody User user){
        try{
          user.setPassword(bcryptEncoder.encode(user.getPassword()));
          users.save(user);
          return ok("its okay");
        }catch (RuntimeException e){
          return (ResponseEntity) ResponseEntity.status(HttpStatus.CONFLICT);
        }

    }

    @PostMapping("/reset")
    public ResponseEntity reset(@RequestParam String email){
        try{
        User u = this.users.findByEmail(email).orElseThrow(()-> new UsernameNotFoundException("Users email  not found"));
        u.setPassword(bcryptEncoder.encode("password"));
        SimpleMailMessage mail=new SimpleMailMessage();
        mail.setTo(email);
        mail.setFrom("hariombabug123@gmail.com");
        mail.setSubject("Reset Password");
        mail.setText("Your password for the username : "+u.getUsername()+" has been reset to password \n ");

        javaMailSender.send(mail);

        this.users.save(u);
        return (ResponseEntity) ok("Email sent");
        }catch(Exception e){
          return (ResponseEntity) ResponseEntity.notFound();
        }
    }


}
