import {ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Employee} from '../../model/employee';
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
  user : Employee;
  
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
              private detService: DetailsService,
              private fb: FormBuilder) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    
  }
  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    // console.log("okay");
    const email = sessionStorage.getItem('email');
    // console.log(email)
    this.detService.getAllDetails(email).subscribe(
     response => {
        this.user = response;
        // console.log(response);  
  })
   
  }



}
