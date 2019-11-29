import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../service/registration.service';
import { Hr } from 'src/app/hr-module/model/hr';
import { Router } from '@angular/router';
import { ToasterService } from '../service/toaster-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor( private RegistrationService: RegistrationService,private router:Router, private ts:ToasterService ) { 
  }
  isLoading = false;
  ngOnInit() {
  }

  //registers only hr 
 register(username,password,email){
   this.isLoading = true;
   this.RegistrationService.registerHr(username,password,email).subscribe(
     response => {
      //do nothing
     },
     error =>{
      if(error.status == 200){
        this.ts.success("Sucessfully Registered","HR has been registered sucessfully");
        this.router.navigate(['/auth/login']);
      }else{this.ts.error("Could not Register","Please contact the office")}
      
      this.isLoading = false
     }
   );
 }

}
