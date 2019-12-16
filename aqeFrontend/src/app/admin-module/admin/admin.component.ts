import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../service/admin-service.service';
import { Router} from '@angular/router';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  topic:string
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private topic: string;

  private responseMessage: string;

  showSpinnerIndicator:boolean=false;

  constructor(private adminService: AdminServiceService,
    private router: Router,
    public dialog: MatDialog
    ) {

       }

  ngOnInit() {
  }

  // onSubmit(){
  //   console.log(this.topic);
  //   this.showSpinnerIndicator=true;
  //   this.adminService.createTest(this.topic).subscribe(data => {
  //     this.responseMessage = data.message;

  //     console.log(this.responseMessage);
  //     this.showSpinnerIndicator=false;
  //     this.topic="";
  //   });
  // }

  goToCreatedPage() {
    this.router.navigate(['/testCreated', this.responseMessage]);
  }

  onSubmit(): void {
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '40%',
        data: {topic: this.topic}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        // console.log('The dialog was closed');
        // this.animal = result;
      });
      this.topic = "";
    }
}



@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'modal.component.html',
  styleUrls: ['./admin.component.css']
})
export class DialogOverviewExampleDialog implements OnInit{

  private responseMessage: string;

  showSpinnerIndicator:boolean=false;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private adminService:AdminServiceService) {}
  
  ngOnInit(){
    // console.log(this.data.topic);
    this.showSpinnerIndicator=true;
    this.adminService.createTest(this.data.topic).subscribe(result=> {
      this.responseMessage = result.message;
      // console.log(this.responseMessage);  
      this.showSpinnerIndicator = false;
    });

  }
  onOkClick(): void {
    this.dialogRef.close();
  }

}
