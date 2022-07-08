import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OperationsHistoryComponent } from './operations-history/operations-history.component';
import { AppRoutingModule } from './app-routing.module';
import { NewOperationComponent } from './new-operation/new-operation.component';

@NgModule({
  declarations: [
    AppComponent,
    OperationsHistoryComponent,
    NewOperationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
