import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { dashboardRoutes } from './dashboard.routing';
// import { AuthGuardService } from '../auth/auth-guard.service';

const dashboardRoute: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: dashboardRoutes,
    // canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoute)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class DashboardRoutingModule {}
