import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ToasterService } from './authentication-module/service/toaster-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QUIZO';
}
