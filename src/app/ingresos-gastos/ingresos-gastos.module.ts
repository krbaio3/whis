import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// CoreModule
import { CoreModule } from '../core/core.module';

// Modulo Share
import { SharedModule } from '../shared/shared.module';

// Componentes
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DetalleComponent } from './detalle/detalle.component';
import { IngresosGastosComponent } from './ingresos-gastos.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';

// Pipes
import { OrdenIngresoGastoPipe } from './orden-ingreso-gasto.pipe';

// Graficas
import { ChartsModule } from 'ng2-charts';

// Routing
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    ChartsModule,
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    IngresosGastosComponent,
    EstadisticaComponent,
    DetalleComponent,
    OrdenIngresoGastoPipe
  ],
  exports: [DashboardComponent]
})
export class IngresosGastosModule {}
