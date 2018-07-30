import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';

// Manejo de Errres
import Swal from 'sweetalert2';

// rxjs
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

// NGRX
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import {
  ActivarLoadingAction,
  DesactivarLoadingAction
} from '../shared/ui.actions';
import { SetUserAction } from './auth.actions';

// Modelo
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubscription: Subscription = new Subscription();
  
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private afDB: AngularFirestore,
    private store: Store<AppState>
  ) {}

  initAuthListener(): void {
    this.afAuth.authState.subscribe((firebaseUser: firebase.User) => {
      if ( firebaseUser ) {
        this.userSubscription = this.afDB.doc(`${firebaseUser.uid}/usuario`).valueChanges()
          .subscribe(
            (userObj: any) => {
              console.log(userObj);
              const newUser = new User(userObj);
              this.store.dispatch( new SetUserAction(newUser));
            }
          );
      } else {
        this.userSubscription.unsubscribe();
      }
    });
  }

  crearUsuario(nombre: string, email: string, password: string): void {
    this.store.dispatch(new ActivarLoadingAction());

    this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);
        const user: User = {
          uid: response.user.uid,
          nombre,
          email: response.user.email
        };

        this.afDB
          .doc(`${user.uid}/usuario`)
          .set(user)
          .then(() => {
            this.router.navigate(['/']);
            this.store.dispatch(new DesactivarLoadingAction());
          })
          .catch(error => {
            this.store.dispatch(new DesactivarLoadingAction());
            Swal('Error al Insertar Datos en Firebase', error.message, 'error');
            // console.error(error);
          });
      })
      .catch(error => {
        this.store.dispatch(new DesactivarLoadingAction());
        Swal('Error al Crear Usuario', error.message, 'error');
        // console.error(error);
      });
  }
  logIn(email: string, password: string): void {
    this.store.dispatch(new ActivarLoadingAction());

    console.log('entra en logIn');
    this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);
        this.router.navigate(['/']);
        this.store.dispatch(new DesactivarLoadingAction());
      })
      .catch(error => {
        this.store.dispatch(new DesactivarLoadingAction());
        Swal('Error Login', error.message, 'error');
        // console.error(error);
        // alert(error);
      });
  }

  logOut() {
    this.afAuth.auth
      .signOut()
      .then(() => {
        this.router.navigate(['/login']);
        Swal('LogOut', 'La sesión ha sido cerrada', 'success');
      })
      .catch(error => Swal('Error al Desconectar', error.message, 'error'));
  }

  isAuth(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      map(firebaseUser => {
        if (firebaseUser == null) {
          this.router.navigate(['login']);
        }
        return firebaseUser != null;
      })
    );
  }
}
