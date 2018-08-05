import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { dashboardRoutes } from './dashboard.routing';

const dashboardRoute: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: dashboardRoutes,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoute)
  ],
  exports: [
    RouterModule
  ],
})
export class DashboardRoutingModule {}
