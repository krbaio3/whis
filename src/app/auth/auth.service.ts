import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';

// Manejo de Errres
import Swal from 'sweetalert2';

// rxjs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Modelo
import { User } from './models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private afDB: AngularFirestore
  ) {}

  initAuthListener(): void {
    this.afAuth.authState.subscribe((firebaseUser: firebase.User) => {
      console.log(firebaseUser);
    });
  }

  crearUsuario(nombre: string, email: string, password: string): void {
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
          .then(() => this.router.navigate(['/']))
          .catch(error => {
            Swal('Error al Insertar Datos en Firebase', error.message, 'error');
            // console.error(error);
          });
      })
      .catch(error => {
        Swal('Error al Crear Usuario', error.message, 'error');
        // console.error(error);
      });
  }
  logIn(email: string, password: string): void {
    console.log('entra en logIn');
    this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);
        this.router.navigate(['/']);
      })
      .catch(error => {
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
