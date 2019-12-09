import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr'
import { ToasterService } from '../authentication-module/service/toaster-service.service'
export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  

  isLoggedIn: boolean;
  loggedInUser
  loggedInRole;
  constructor(private toastr: ToastrService, private toasterService: ToasterService) { }
  title = 'Welcome to QuizO';

  ngOnInit(): void {
    this.isLoggedIn = sessionStorage.getItem('username')!=null?true:false;
    if(this.isLoggedIn==true){
      this.loggedInUser = sessionStorage.getItem('username');
      this.loggedInRole = sessionStorage.getItem('role')=="ADM"?"admin":sessionStorage.getItem('role')=="HRM"?"hr":"employee";
    }
    
  }
  foods: Food[] = [
    {value: 'a-0', viewValue: 'Buy Product'},
    {value: 'b-1', viewValue: 'Update the Product'},
    {value: 'c-2', viewValue: 'Funding for Product'}
  ];

  checkLogin() {
    this.toasterService.success('Message sent');

  }
}
