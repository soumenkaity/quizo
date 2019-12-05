import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import {RegistrationService } from '../service/registration.service';
import { ToastrService } from 'ngx-toastr'
import { ToasterService } from '../service/toaster-service.service';
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
  isLoading = false;

  constructor(private router: Router,
    private loginservice: AuthenticationService,
    private registrationService: RegistrationService, 
    private toastr: ToastrService,
    private toasterService: ToasterService,
    private activatedRoute: ActivatedRoute
     ) { 

      this.activatedRoute.queryParams.subscribe(params => {
       this.username = params['username'];
       this.password = params['password'];
    });
     }

  ngOnInit() {
  }

  checkLogin() {
    this.isLoading =true;
    this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
          sessionStorage.setItem('username',data.username);
          sessionStorage.setItem('role',data.role);
          sessionStorage.setItem('email',data.email);
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
        this.toasterService.success('Login successful');
        this.invalidLogin = false
      },
      error => {
        this.isLoading =false;
        this.toasterService.error('Login failed, login again');
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


  forgotPassword(){
    this.router.navigate(['/auth/reset']);
  }


}