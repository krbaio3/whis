import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from 'angularfire2/firestore';
import { IngresoGasto } from './models/ingreso-gasto.model';
import { AuthService } from '../auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IngresosGastosService {
  constructor(
    private afDB: AngularFirestore,
    public authService: AuthService,
    private store: Store<AppState>
  ) {}

  initIngresoGastoListener() {
    const user = this.authService.getUsuario();

    console.log(user.uid);

    this.store
      .select('auth')
      .pipe(
        filter(auth => auth.user !== null)
      )
      .subscribe(auth => {
        console.log(auth.user.uid);
        this.ingresoGastoItem(auth.user.uid);
      });
  }

  crearIngresoGasto(ingresoGasto: IngresoGasto): Promise<DocumentReference> {
    const user = this.authService.getUsuario();

    return this.afDB
      .doc(`${user.uid}/ingresos-gastos`)
      .collection('items')
      .add({ ...ingresoGasto });
  }

  private ingresoGastoItem ( uid: string ) {

    this.afDB.collection(`${uid}/ingresos-gastos/items`)
      .valueChanges()
      .subscribe( docData => {
        console.log(docData);
      });
  }
}
