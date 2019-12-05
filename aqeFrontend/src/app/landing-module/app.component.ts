import { Component } from '@angular/core';
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
export class AppComponent {
  title = 'Welcome to QuizO';
  constructor(private toastr: ToastrService, private toasterService: ToasterService) { }
  foods: Food[] = [
    {value: 'a-0', viewValue: 'Buy Product'},
    {value: 'b-1', viewValue: 'Update the Product'},
    {value: 'c-2', viewValue: 'Funding for Product'}
  ];
  checkLogin() {
    this.toasterService.success('Message sent');

  }
}
