import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
// Ver notas más abajo
// import { AppState } from '../../app.reducer';
import { AppState } from '../ingreso-gasto.reducer';
import { filter } from 'rxjs/operators';
import { IngresoGasto } from '../models/ingreso-gasto.model';
import { Subscription } from 'rxjs';
import { IngresosGastosService } from '../ingresos-gastos.service';
import Swal from 'sweetalert2';

// Para el uso del Lazy Loaded, el AppState no se puede coger del RouterInitializer,
// porque no está extendido del que contiene el IngresoGasto (LazyLoad).
// Funcionaría igual cogiendo el state del raíz, que del ingreso-gasto.reducer.
// La ventaja es que al estar haciendo la app desde cero, tenemos el Intelligence.
// Se le podía haber puesto otro nombre para diferenciarnos, por ejemplo
// import * as fromIngresoGasto from '../ingreso-gasto.reducer'; para que se diferenciara

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
    this.ingresosGastoSrv
      .borrarIngresoGasto(item.uid)
      .then(() => Swal('Eliminado', item.descripcion, 'success'))
      .catch(error => Swal('Error al borrar', error.description, 'error'));
  }

  ngOnDestroy(): void {
    this.ingresoGastoSubscripcion.unsubscribe();
  }
}
