import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  crearUsuario(nombre: string, email: string, password: string): void {
    this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);
        this.router.navigate(['/']);
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
    this.afAuth.auth.signOut()
      .then(() => {
        this.router.navigate(['/login']);
        Swal('LogOut', 'La sesión ha sido cerrada', 'success');
      })
      .catch(error => Swal('Error al Desconectar', error.message, 'error'));
  }
}
