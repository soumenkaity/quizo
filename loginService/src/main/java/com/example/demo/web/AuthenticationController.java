package com.example.demo.web;

import com.example.demo.domain.User;
import com.example.demo.domain.UserMongo;
import com.example.demo.repository.UserMongoRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.jwt.JwtTokenProvider;
import com.example.demo.service.RandomPasswordGenerationService;
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
import java.util.List;
import java.util.Map;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthenticationController {
    @Autowired
    RandomPasswordGenerationService randomPasswordGenerationService;

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

    @Autowired
    private UserMongoRepository userMongoRepository;

    @PostMapping("/signin")
    public ResponseEntity signin(@RequestBody AuthenticationRequest data) {
        try {
            String username = data.getUsername();
            String password = data.getPassword();

            String role = this.users.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("Username " + username + "not found")).getRole();
            String email = this.users.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("Username " + username + "not found")).getEmail();
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
            String token = jwtTokenProvider.createToken(username, role );
            Map<Object, Object> model = new HashMap<>();
            model.put("username", username);
            model.put("email",email);
            model.put("role",role);
            model.put("token", token);
            return ok(model);
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Invalid username/password supplied");
        }
    }


    @PostMapping("/register")
    public ResponseEntity registerInMySql(@RequestBody User user){
        try{
          user.setPassword(bcryptEncoder.encode(user.getPassword()));
          users.save(user);
          return ok("its okay");
        }catch (RuntimeException e){
          return (ResponseEntity) ResponseEntity.status(HttpStatus.CONFLICT);
        }

    }
  @PostMapping("/register/bulk")
  public ResponseEntity registerInMySqlBulk(@RequestBody List<User> user){
    try{
      for(User u:user){
      u.setPassword(bcryptEncoder.encode(u.getPassword()));
      users.save(u);
      }
      return ok("users created");
    }catch (RuntimeException e){
      return (ResponseEntity) ResponseEntity.status(HttpStatus.CONFLICT);
    }

  }
    @PostMapping("/register/m")
    public ResponseEntity registerInMongo(@RequestBody UserMongo userMongo){ return new ResponseEntity(userMongoRepository.save(userMongo),HttpStatus.OK); }

    @PostMapping("/reset")
    public ResponseEntity reset(@RequestParam String email){
        try{
        User u = this.users.findByEmail(email).orElseThrow(()-> new UsernameNotFoundException("Users email  not found"));
        String password = RandomPasswordGenerationService.generateRandomPassword(10);
        u.setPassword(bcryptEncoder.encode(password));
        SimpleMailMessage mail=new SimpleMailMessage();
        mail.setTo(email);
        mail.setFrom("hariombabug123@gmail.com");
        mail.setSubject("Reset Password");
        mail.setText("Your password for the username : "+u.getUsername()+" has been reset to password: "+password);

        javaMailSender.send(mail);

        this.users.save(u);
        return (ResponseEntity) ok("Email sent");
        }catch(Exception e){
          return (ResponseEntity) ResponseEntity.notFound();
        }
    }

    //------------------------------------------------
  @GetMapping("/details")
  public ResponseEntity getUserDetails(@RequestParam String email){ return new ResponseEntity(userMongoRepository.findByEmail(email),HttpStatus.OK);}

}
