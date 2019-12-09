import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr'
import { ToasterService } from '../authentication-module/service/toaster-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  

  isLoggedIn: boolean;
  loggedInUser
  loggedInRole;
  title = 'Welcome to QuizO';
  constructor(private toastr: ToastrService, private toasterService: ToasterService) { }

  ngOnInit(): void {
    this.isLoggedIn = sessionStorage.getItem('username')!=null?true:false;
    if(this.isLoggedIn==true){
      this.loggedInUser = sessionStorage.getItem('username');
      this.loggedInRole = sessionStorage.getItem('role')=="ADM"?"admin":sessionStorage.getItem('role')=="HRM"?"hr":"employee";
    }
    
  }
  checkLogin() {
    this.toasterService.success('Message sent');

  }
}
