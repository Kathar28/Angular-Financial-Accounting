import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {operation} from "./operation";

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  operations: operation[]  = [];
  constructor() { }
  getOperations(): Observable<operation[]>{
    return of(this.operations);
  }
  addOperation(description:string, amount:number): void{
    this.operations.push({description,  amount} as operation)
  }
}
