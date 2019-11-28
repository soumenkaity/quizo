import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../service/authentication.service';
import { ToasterService } from '../service/toaster-service.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  isLoading = false;
  constructor(private authService:AuthenticationService,private ts:ToasterService) { }

  ngOnInit() {
  }

  sendMail(email){
    this.isLoading = true;
    this.authService.sendMail(email).subscribe(
      response => {
        // do nothing
        // 
      },
      error => {
        if(error.status == 200){
          this.ts.success("sucessfully sent mail","Go back and login with the new password")
        }
        else{
          this.ts.error("failed to send mail")
        }
        
      },
      () => {
      this.isLoading = false;
      }
      
    )
  }

}
