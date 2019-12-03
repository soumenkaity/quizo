import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateuserService } from '../service/createuser.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateModalComponent } from '../create-modal/create-modal.component';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  detailsForm: FormGroup;
  loginForm: FormGroup;

  generatedUsername;
  generatedPassword;
  constructor(
    private router: Router, 
    private createUserService: CreateuserService,
    private fb: FormBuilder,
    public dialog: MatDialog) {}

  ngOnInit() {
    this.generateUserAndPass();
    
    this.detailsForm = this.fb.group({
      "name": ["", Validators.required],
      "phone":["", Validators.required],
      "email":["", Validators.required],
      "role":["", Validators.required],
      "designation":["", Validators.required]
    });
  }
  openDialog(userDetails): void {
    this.generateUserAndPass()
    this.loginForm = this.fb.group({
      "username":this.generatedUsername,
      "password":this.generatedPassword,
      "role":["", Validators.required],
      "email":userDetails.email

    })
    const dialogRef = this.dialog.open(CreateModalComponent, {
      width: '450px',
      data: {form:this.loginForm},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == undefined){
        console.log('-------')
      }

      this.createUserService.saveUserInMongo(userDetails).subscribe(
        res => console.log(res)
      );
      this.createUserService.saveUserInMysql(result).subscribe(
        res => console.log(res)
      );

      this.router.navigate(['/admin'])
    });


  }

  generateUserAndPass(){
    this.createUserService.generateRandomUserAndPass().subscribe(
      response => {}, //do nothing
      error => {
       this.generatedUsername = error.error.text.split(',')[0]
       this.generatedPassword = error.error.text.split(',')[1]
      })
  }

}
