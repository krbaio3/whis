import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';

// RxJS
import { take } from 'rxjs/operators';

// Servicios
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanLoad {
  constructor(public authSrv: AuthService) {}

  canActivate() {
    return this.authSrv.isAuth();
  }

  // Funciona igual que el canActivated (emite un boolean, una promesa
  // para devolver un boolean, o un observable que regrese un boolean),
  // pero se queda escuchando todo el rato, esperando que cambie el valor,
  // hay que cancelar la suscripcion cada vez que queamos entrar
  canLoad() {
    return this.authSrv.isAuth()
      .pipe(
        // take cuantas notificaciones emite el obsevable antes de cancelar la 
        // subscripción
        take(1)
      );
  }
}
