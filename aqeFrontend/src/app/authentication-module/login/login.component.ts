import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import {RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  email = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService,
    private registrationService: RegistrationService ) { }

  ngOnInit() {
  }

  checkLogin() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['/hr/main'])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
      }
    )
    );

  }
  register(){
    this.registrationService.register(this.username,this.password,this.email).subscribe(data => console.log(data));
  }

}