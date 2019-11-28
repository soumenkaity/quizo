import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../service/admin-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import {CoreModule} from '../../core/core.module';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private topic: String;

  private responseMessage: string;

  constructor(private adminService: AdminServiceService,
    private router: Router,
    ) {

  }

  ngOnInit() {

  }

  onClick(topic) {
    this.topic = topic;
    this.adminService.createTest(this.topic).subscribe(data => {
    this.responseMessage = data.message;
    console.log(this.responseMessage);
    this.goToCreatedPage()
  });
  }

  goToCreatedPage() {
    this.router.navigate(['/testCreated', this.responseMessage]);
  }


}
