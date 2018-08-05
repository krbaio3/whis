import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
// Ver notas más abajo
// import { AppState } from '../../app.reducer';
import { AppState } from '../ingreso-gasto.reducer';
import { Subscription } from 'rxjs';
import { IngresoGasto } from '../models/ingreso-gasto.model';

// Para el uso del Lazy Loaded, el AppState no se puede coger del RouterInitializer,
// porque no está extendido del que contiene el IngresoGasto (LazyLoad).
// Funcionaría igual cogiendo el state del raíz, que del ingreso-gasto.reducer.
// La ventaja es que al estar haciendo la app desde cero, tenemos el Intelligence.
// Se le podía haber puesto otro nombre para diferenciarnos, por ejemplo
// import * as fromIngresoGasto from '../ingreso-gasto.reducer'; para que se diferenciara

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.scss']
})
export class EstadisticaComponent implements OnInit, OnDestroy {
  // Doughnut
  public doughnutChartLabels: string[] = ['Ingresos', 'Gastos'];
  public doughnutChartData: number[];

  public ingresos: number;
  public gastos: number;

  public countIngresos: number;
  public countGastos: number;

  subscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('ingresoGasto').subscribe(ingresoGasto => {
      this.countIngresosGastos(ingresoGasto.items);
    });
  }

  private countIngresosGastos(items: IngresoGasto[]) {
    this.ingresos = 0;
    this.gastos = 0;

    this.countIngresos = 0;
    this.countGastos = 0;

    items.forEach(item => {
      switch (item.tipo) {
        case 'Ingreso':
          this.countIngresos++;
          this.ingresos += item.importe;
          break;
        case 'Gasto':
          this.countGastos++;
          this.gastos -= item.importe;
          break;

        default:
          break;
      }
    });
    this.doughnutChartData = [this.ingresos, this.gastos];
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
