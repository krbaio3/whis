import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { filter } from 'rxjs/operators';
import { IngresoGasto } from '../models/ingreso-gasto.model';
import { Subscription } from 'rxjs';
import { IngresosGastosService } from '../ingresos-gastos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit, OnDestroy {
  public items: IngresoGasto[];
  public ingresoGastoSubscripcion: Subscription = new Subscription();

  constructor(
    private store: Store<AppState>,
    public ingresosGastoSrv: IngresosGastosService
  ) {}

  ngOnInit() {
    this.ingresoGastoSubscripcion = this.store
      .select('ingresoGasto')
      .pipe(filter(ingresoGasto => ingresoGasto.items.length > 0))
      .subscribe(ingresoGasto => {
        console.log(ingresoGasto.items);
        this.items = ingresoGasto.items;
      });
  }

  borrarItem(item: IngresoGasto) {
    console.log('borrar ', item);
    this.ingresosGastoSrv.borrarIngresoGasto(item.uid)
      .then(() => Swal('Eliminado', item.descripcion, 'success'))
      .catch(error => Swal('Error al borrar', error.description, 'error'));
  }

  ngOnDestroy(): void {
    this.ingresoGastoSubscripcion.unsubscribe();
  }
}
