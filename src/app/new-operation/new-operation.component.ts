import {Component, OnInit} from '@angular/core';
import {OperationService} from "../operation.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-new-operation',
  templateUrl: './new-operation.component.html',
  styleUrls: ['./new-operation.component.less']
})
export class NewOperationComponent implements OnInit {

  constructor(private operationService: OperationService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  addOperation(amount: number, description: string): void {
    if (amount === 0) {
      this.snackBar.open("The amount cannot be zero", '', {duration: 3000})
    } else if (this.operationService.balance + amount >= 0) {
      this.operationService.addOperation(description, amount);
      this.operationService.balance += amount;
      this.snackBar.open("The operation was completed successfully", '', {duration: 3000})
    } else {
      this.snackBar.open("Not enough money", '', {duration: 3000})
    }
  }

}
