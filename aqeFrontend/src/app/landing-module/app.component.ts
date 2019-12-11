import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr'
import { ToasterService } from '../authentication-module/service/toaster-service.service'
import { Message } from '../landing-module/model/message';
import {MessageserviceService} from '../landing-module/service/messageservice.service'
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  name='';
  email='';
  number='';
  isLoggedIn: boolean;
  loggedInUser
  loggedInRole;
  title = 'Welcome to QuizO';
  constructor(private router:Router,private toastr: ToastrService, private toasterService: ToasterService, private messageservicce:MessageserviceService) { }

  ngOnInit(): void {
    this.isLoggedIn = sessionStorage.getItem('username')!=null?true:false;
    if(this.isLoggedIn==true){
      this.loggedInUser = sessionStorage.getItem('username');
      this.loggedInRole = sessionStorage.getItem('role')=="ADM"?"admin":sessionStorage.getItem('role')=="HRM"?"hr":"employee";
    }
      
  }
  checkLogin() {
    this.messageservicce.post(this.name,this.email,this.number);
    this.toasterService.success('Message sent, we will contact you');

  }
  
}
