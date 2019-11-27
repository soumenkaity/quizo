import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../service/registration.service';
import { Hr } from 'src/app/hr-module/model/hr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
   hr:Hr;
  constructor( private RegistrationService: RegistrationService ) { 
  }

  ngOnInit() {
  }
  sendinfo(name, email, password, company, mobile)
  {
    this.hr= new Hr(name,password,email,company,mobile);
    this.RegistrationService.registerhr(this.hr);
  }

}
