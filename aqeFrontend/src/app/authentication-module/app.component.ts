import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-management';
   
   constructor(private loginservice: AuthenticationService,)
   {

   }

  userIsLogged()
  {
    let user = sessionStorage.getItem('username')
    // console.log(!(user === null))
    return (user === null)
  }

}
