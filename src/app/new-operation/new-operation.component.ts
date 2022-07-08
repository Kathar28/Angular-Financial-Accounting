import { Component, OnInit } from '@angular/core';
import {OperationService} from "../operation.service";

@Component({
  selector: 'app-new-operation',
  templateUrl: './new-operation.component.html',
  styleUrls: ['./new-operation.component.less']
})
export class NewOperationComponent implements OnInit {

  constructor(private operationService: OperationService) { }

  ngOnInit(): void {
  }

  add(description: string, amount: number): void {
    if (amount === 0) {
    } else if (this.operationService.balance + amount >= 0) {
      this.operationService.addOperation(description, amount);
      this.operationService.balance += amount;
    }
  }

}
