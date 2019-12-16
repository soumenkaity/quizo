import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CreateuserService } from '../service/createuser.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateModalComponent } from '../create-modal/create-modal.component';
import { ToasterService } from 'src/app/authentication-module/service/toaster-service.service';

export class CSVRecord {

  public name: any;
  public role: any;
  public phone: any;
  public email: any;
  public designation: any;
  public address: any;
  public gender: any;

  constructor() {

  }
}

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
  isFileSelected: boolean = false;
  selectedFile;
  isLoading: boolean;
  constructor(
    private router: Router, 
    private createUserService: CreateuserService,
    private ts:ToasterService,
    private fb: FormBuilder,
    public dialog: MatDialog) {}
    public csvRecords: any[] = [];

    @ViewChild('fileImportInput', {static: false}) fileImportInput: any;
  
    fileChangeListener($event: any): void {
      this.isFileSelected = false;
  
      let text = [];
      let files = $event.srcElement.files;
      this.selectedFile = files[0];
      if (this.isCSVFile(files[0])) {
  
        let input = $event.target;
        let reader = new FileReader();
        reader.readAsText(input.files[0]);
  
        reader.onload = () => {
          let csvData = reader.result;
          let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
  
          let headersRow = this.getHeaderArray(csvRecordsArray);
  
          this.csvRecords = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);

        };
  
        reader.onerror = function () {
          alert('Unable to read ' + input.files[0]);
        };
  
      } else {
        alert("Please import valid .csv file.");
        this.fileReset();
      }
    }
  
    getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
      let jsonArr = [];
  
      for (let i = 1; i < csvRecordsArray.length; i++) {
        let data = (<string>csvRecordsArray[i]).split(',');
  
        // FOR EACH ROW IN CSV FILE IF THE NUMBER OF COLUMNS
        // ARE SAME AS NUMBER OF HEADER COLUMNS THEN PARSE THE DATA
        if (data.length == headerLength) {
  
          let csvRecord: CSVRecord = new CSVRecord();
  
          csvRecord.name = data[0].trim();
          csvRecord.role = data[1].trim();
          csvRecord.phone = data[2].trim();
          csvRecord.email = data[3].trim();
          csvRecord.designation = data[4].trim();
          csvRecord.address = data[5].trim();
          csvRecord.gender = data[6].trim();
  
          var obj = {
            "name": csvRecord.name,
            "role": csvRecord.role,
            "phone": csvRecord.phone,
            "email": csvRecord.email,
            "designation": csvRecord.designation,
            "address": csvRecord.address,
            "gender": csvRecord.gender
          }
  
          jsonArr.push(obj);
        }
      }
      this.isFileSelected = true;
      return jsonArr;
    }
  
    // CHECK IF FILE IS A VALID CSV FILE
    isCSVFile(file: any) {
      return file.name.endsWith(".csv");
    }
  
    // GET CSV FILE HEADER COLUMNS
    getHeaderArray(csvRecordsArr: any) {
      let headers = (<string>csvRecordsArr[0]).split(',');
      let headerArray = [];
      for (let j = 0; j < headers.length; j++) {
        headerArray.push(headers[j]);
      }
      return headerArray;
    }
  
    fileReset() {
      this.fileImportInput.nativeElement.value = "";
      this.csvRecords = [];
    }

  ngOnInit() {
    this.generateUserAndPass();
    
    this.detailsForm = this.fb.group({
      "name": ["", Validators.required],
      "phone":["", Validators.required],
      "email":["", Validators.required],
      "role":["HRM", Validators.required],
      "designation":["", Validators.required],
      "address":["", Validators.required],
      "gender":["", Validators.required]
    });
  }
  openDialog(userDetails): void {
    this.generateUserAndPass()
    this.loginForm = this.fb.group({
      "username":this.generatedUsername,
      "password":this.generatedPassword,
      "role":["HRM", Validators.required],
      "email":userDetails.email

    })
    const dialogRef = this.dialog.open(CreateModalComponent, {
      width: '450px',
      data: {form:this.loginForm},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined){
        this.createUserService.saveUserInMongo(userDetails).subscribe(
          responnse => this.ts.success("User created")
        );
        this.createUserService.saveUserInMysql(result).subscribe(
          response => this.ts.success("User login details sent")
        );

        this.router.navigate(['/admin'])
      }
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

  submitCsv(){
    this.isLoading = true;
    this.isFileSelected = false;
    this.createUserService.saveUsersInBulk(this.csvRecords).subscribe(
      
      response => {
        this.ts.success("All users in file are Registered")
        this.isLoading = false
      },
      error =>{
        this.ts.error("Couldnot register some users")
        this.isLoading = false
      },
      () => {}
      
    )
    
  }

}
