import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from 'angularfire2/firestore';
import { IngresoGasto } from './models/ingreso-gasto.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IngresosGastosService {
  constructor(
    private afDB: AngularFirestore,
    public authService: AuthService
  ) {}

  crearIngresoGasto(
    ingresoGasto: IngresoGasto
  ): Promise<DocumentReference> {
    const user = this.authService.getUsuario();

    return this.afDB
      .doc(`${user.uid}/ingresos-gastos`)
      .collection('items')
      .add({ ...ingresoGasto });
  }
}
