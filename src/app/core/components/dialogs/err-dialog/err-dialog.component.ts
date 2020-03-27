import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-err-dialog',
  templateUrl: './err-dialog.component.html',
  styleUrls: ['./err-dialog.component.css']
})
export class ErrDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ErrDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  private router: Router
  ) { }

  ngOnInit() {
  }
  closeDialog(){
      this.dialogRef.close();
      this.router.navigate(["/"])
  }

}
