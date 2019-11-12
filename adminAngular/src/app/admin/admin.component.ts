import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private topic:String;

  private responseEntity:any;
  
  constructor(private adminService:AdminServiceService,
              private router : Router,
              private route : ActivatedRoute) {

   }

  ngOnInit() {
   
  }

  onClick(topic){
    this.topic=topic;
    this.adminService.createTest(this.topic).subscribe(result=>this.goToCreatedPage())
  }

  goToCreatedPage(){
    this.router.navigate(['/testCreated'])
  }


}
