import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import {RegistrationService } from '../service/registration.service';
import { ToastrService } from 'ngx-toastr'
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
    private registrationService: RegistrationService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  checkLogin() {
    this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
          sessionStorage.setItem('username',data.username);
          sessionStorage.setItem('role',data.role)
          let tokenStr= 'Bearer '+data.token;
          sessionStorage.setItem('token', tokenStr);
        const userRole = data.role;
        if(userRole=='ADM'){
          this.router.navigate(['/admin'])
        }
        if(userRole=='EMP'){
          this.router.navigate(['/employee'])
        }
        if(userRole=='HRM'){
          this.router.navigate(['/hr'])
        }
        this.toastr.success('Login successful');
        this.invalidLogin = false
      },
      error => {
        console.log(error.error.message);
        this.toastr.error('Login failed, login again');
        this.invalidLogin = true
      }
    )
    

  }
  register(){
    this.registrationService.register(this.username,this.password,this.email).subscribe(
      data => {console.log(data)},
      err => {console.log(err)}
      );
  }


}