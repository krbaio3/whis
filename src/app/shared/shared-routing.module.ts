import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillComponent } from '../bill/bill.component';

const billRoute: Routes = [
  {
    path: 'bill',
    component: BillComponent,
    // children: billRoutes,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(billRoute)
  ],
  exports: [
    RouterModule
  ],
})
export class SharedRoutingModule { }
