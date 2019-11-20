import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../service/admin-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-created-page',
  templateUrl: './created-page.component.html',
  styleUrls: ['./created-page.component.css']
})
export class CreatedPageComponent implements OnInit {

  message:string;

  constructor(private adminService:AdminServiceService,
              private router:Router,
              private route:ActivatedRoute) { 
                this.route.params.subscribe(params=>{
                  this.message=params.responseMessage;
                });
               
              }

  ngOnInit() {
   
  }

  onClick(){
    this.router.navigate([' '])
  }
}
