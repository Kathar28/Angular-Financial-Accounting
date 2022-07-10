import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {OperationsHistoryComponent} from "./operations-history/operations-history.component";
import {NewOperationComponent} from "./new-operation/new-operation.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: 'operation-history', component: OperationsHistoryComponent},
  {path: 'new-operation', component: NewOperationComponent},
  {path: '', redirectTo: '/new-operation', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
