import { Routes } from '@angular/router';

import { EstadisticaComponent } from '../ingresos-gastos/estadistica/estadistica.component';
import { IngresosGastosComponent } from '../ingresos-gastos/ingresos-gastos.component';
import { DetalleComponent } from '../ingresos-gastos/detalle/detalle.component';

export const dashboardRoutes: Routes = [
  { path: '', component: EstadisticaComponent },
  { path: 'ingresos-gastos', component: IngresosGastosComponent },
  { path: 'detail', component: DetalleComponent },
];
