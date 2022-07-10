import { Component, OnInit } from '@angular/core';
import {OperationService} from "../operation.service";

@Component({
  selector: 'app-new-operation',
  templateUrl: './new-operation.component.html',
  styleUrls: ['./new-operation.component.less']
})
export class NewOperationComponent implements OnInit {
    amount: number = 0;
    description: string = '';

  constructor(private operationService: OperationService) { }

  ngOnInit(): void {
  }

  addOperation(): void {
    if (this.amount !== 0 && this.operationService.balance + this.amount >= 0) {
      this.operationService.addOperation(this.description, this.amount);
      this.operationService.balance += this.amount;
    }
  }

}
