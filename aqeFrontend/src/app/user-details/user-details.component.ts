import {ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Employee} from '../model/employee';
import {DetailsService} from '../service/details.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  // profile = new FormGroup({
  //   id : new FormControl(''),
  //   name : new FormControl(''),
  //   role : new FormControl(''),
  //   phone: new FormControl(''),
  //   email: new FormControl(''),
  //   designation: new FormControl('')
  // });    
  user : Employee;
  userdet : FormGroup;
  
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
              private detService: DetailsService,
              private fb: FormBuilder) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    
  }
  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    console.log("okay");
    this.detService.getAllDetails().subscribe(
     response => {this.user = response;
    console.log(response);  
  })
  this.userdet = this.fb.group({
    'id' : this.user.id,
    'name' : this.user.name,
    'role' : this.user.role,
    'phone' : this.user.phone,
    'email' : this.user.email,
    'designation' : this.user.designation
  })
   
  }



}
