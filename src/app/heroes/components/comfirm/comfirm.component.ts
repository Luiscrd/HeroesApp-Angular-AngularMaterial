import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-comfirm',
  templateUrl: './comfirm.component.html',
  styleUrls: ['./comfirm.component.css']
})
export class ComfirmComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ComfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Heroe,
    ) { }

  ngOnInit(): void {
  }

  borrar(){
    this.dialogRef.close(true);
  }

  cancelar(){
    this.dialogRef.close(false);
  }

}
