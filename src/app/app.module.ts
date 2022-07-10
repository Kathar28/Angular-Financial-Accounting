import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OperationsHistoryComponent } from './operations-history/operations-history.component';
import { AppRoutingModule } from './app-routing.module';
import { NewOperationComponent } from './new-operation/new-operation.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    OperationsHistoryComponent,
    NewOperationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
