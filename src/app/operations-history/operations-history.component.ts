import {Component, OnInit} from '@angular/core';
import {OperationService} from "../operation.service";
import {operation} from "../operation";
import {convertToParamMap} from "@angular/router";

@Component({
  selector: 'app-operations-history',
  templateUrl: './operations-history.component.html',
  styleUrls: ['./operations-history.component.less']
})
export class OperationsHistoryComponent implements OnInit {

  operations: operation[] = [];

  balance: number = 0;

  constructor(private operationService: OperationService) {
  }

  ngOnInit(): void {
    this.getOperations();
  }

  getOperations(): void {
    this.operationService.getOperations().subscribe(operations => this.operations = operations)
  }

  add(description: string, amount: number): void {
    if (amount !== 0) {
      if (this.balance < amount || this.balance === Math.abs(amount)) {
        this.operationService.addOperation(description, amount);
        this.balance += amount;
      }
    }
  }
}
