import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from 'angularfire2/firestore';
import { IngresoGasto } from './models/ingreso-gasto.model';
import { AuthService } from '../auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { filter, map } from 'rxjs/operators';
import { SetItemsAction } from './ingreso-gasto.action';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresosGastosService {
  public ingresoGastoListenerSubscription: Subscription = new Subscription();
  public ingresoGastoItemsSubscription: Subscription = new Subscription();

  constructor(
    private afDB: AngularFirestore,
    public authService: AuthService,
    private store: Store<AppState>
  ) {}

  initIngresoGastoListener(): void {
    this.ingresoGastoListenerSubscription = this.store
      .select('auth')
      .pipe(filter(auth => auth.user !== null))
      .subscribe(auth => {
        console.log(auth.user.uid);
        this.ingresoGastoItem(auth.user.uid);
      });
  }

  cancelarSubscripciones(): void {
    this.ingresoGastoListenerSubscription.unsubscribe();
    this.ingresoGastoItemsSubscription.unsubscribe();
  }

  crearIngresoGasto(ingresoGasto: IngresoGasto): Promise<DocumentReference> {
    const user = this.authService.getUsuario();

    return this.afDB
      .doc(`${user.uid}/ingresos-gastos`)
      .collection('items')
      .add({ ...ingresoGasto });
  }

  private ingresoGastoItem(uid: string): void {
    this.ingresoGastoItemsSubscription = this.afDB
      .collection(`${uid}/ingresos-gastos/items`)
      // valueChanges() nos devuelve un array de objetos con el contenido que lo que tenga firebase.
      // la posición en la que nos devuelve no quiere decir que sea la misma que la que esté guardada en firebase
      // .valueChanges()
      .snapshotChanges()
      .pipe(
        map(docData => {
          return docData.map(doc => {
            return {
              uid: doc.payload.doc.id,
              ...doc.payload.doc.data()
            };
          });
        })
      )
      .subscribe((collection: any[]) => {
        this.store.dispatch(new SetItemsAction(collection));
      });
  }

  borrarIngresoGasto(uid: string): Promise<void> {
    const user = this.authService.getUsuario();

    return this.afDB.doc(`${user.uid}/ingresos-gastos/items/${uid}`)
      .delete();
  }
}
