import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Subscription } from 'rxjs';
import { IngresoGasto } from '../models/ingreso-gasto.model';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.scss']
})
export class EstadisticaComponent implements OnInit {
  ingresos: number;
  gastos: number;

  countIngresos: number;
  countGastos: number;

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
    this.countGastos= 0;

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
  }
}
