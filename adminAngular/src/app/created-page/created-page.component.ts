import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-created-page',
  templateUrl: './created-page.component.html',
  styleUrls: ['./created-page.component.css']
})
export class CreatedPageComponent implements OnInit {

  constructor(private adminService:AdminServiceService,
              private router:Router) { }

  ngOnInit() {
  }

  onClick(){
    this.router.navigate([' '])
  }
}
