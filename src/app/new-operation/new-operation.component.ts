import { Component, OnInit } from '@angular/core';
import {OperationService} from "../operation.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-new-operation',
  templateUrl: './new-operation.component.html',
  styleUrls: ['./new-operation.component.less']
})
export class NewOperationComponent implements OnInit {
    amount: number = 0;
    description: string = '';

  constructor(private operationService: OperationService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  addOperation(): void {
    if (this.amount === 0 || this.amount === null || this.description === '') {
      this.snackBar.open("Invalid values", '', {duration: 3000})
    }else if (this.operationService.balance + this.amount >= 0){
      this.operationService.addOperation(this.description, this.amount);
      this.operationService.balance += this.amount;
      this.snackBar.open("The operation was completed successfully", '', {duration: 3000})
    }
  }

}
