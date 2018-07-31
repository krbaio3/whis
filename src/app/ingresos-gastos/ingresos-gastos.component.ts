import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Tipo } from './models/tipo.model';
import { IngresoGasto } from './models/ingreso-gasto.model';
import { IngresosGastosService } from './ingresos-gastos.service';
import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import {
  DesactivarLoadingAction,
  ActivarLoadingAction
} from '../shared/ui.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ingresos-gastos',
  templateUrl: './ingresos-gastos.component.html',
  styleUrls: ['./ingresos-gastos.component.scss']
})
export class IngresosGastosComponent implements OnInit, OnDestroy {
  public formulario: FormGroup;
  public tipo: Tipo = 'Ingreso';
  public loading: boolean;
  public loadingSubscription: Subscription = new Subscription();

  constructor(
    public ingresoGastoSrv: IngresosGastosService,
    public store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.loadingSubscription = this.store
      .select('ui')
      .subscribe(ui => (this.loading = ui.isLoading));

    this.formulario = new FormGroup({
      descripcion: new FormControl('', Validators.required),
      importe: new FormControl(0, Validators.min(0))
    });
  }

  crearIngresoGasto(): void {
    this.store.dispatch(new ActivarLoadingAction());
    console.log(this.formulario.value);
    console.log(this.tipo);

    // const ingresoGasto = new IngresoGasto(
    //   Object.assign({}, this.formulario.value, { tipo: this.tipo })
    // );
    const ingresoGasto = new IngresoGasto({
      ...this.formulario.value,
      tipo: this.tipo
    });
    console.log(ingresoGasto);

    this.ingresoGastoSrv
      .crearIngresoGasto(ingresoGasto)
      .then(() => {
        this.store.dispatch(new DesactivarLoadingAction());
        Swal('Creado', ingresoGasto.descripcion, 'success');
        this.reset();
      })
      .catch(err => {
        this.store.dispatch(new DesactivarLoadingAction());
        Swal('Error al insertar resgistro', err.description, 'error');
      });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

    this.loadingSubscription.unsubscribe();
  }

  /////////////////////////

  private reset() {
    this.formulario.reset({
      importe: 0
    });
  }
}
