import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ToasterService } from '../authentication-module/service/toaster-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private location: Location,private router: Router, private ts: ToasterService) { }

  loggedInUser;
  isLoginPage = false;

  ngOnInit() {
    if(this.router.url == '/auth/login' || this.router.url == '/auth/reset')
      this.isLoginPage = true;
    this.loggedInUser = sessionStorage.getItem('username');
  }
  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }
  logout(){
    this.ts.success("Logged out Sucessfully","Logged Out")
    this.router.navigate(['/auth/logout'])
  }

  gotoAccount(){
    this.router.navigate(['/auth/details'])
  }

}
