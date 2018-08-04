import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

// Pagina no encontrada
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const APP_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    // para cargar el módulo en LAzyLoad, referenciamos la ruta del módulo primero + #(hash) + Nombre_del_Modulo
    // puede dar fallo en local la primera vez, parar el servidor y volver a arrancar
    loadChildren:
      './ingresos-gastos/ingresos-gastos.module#IngresosGastosModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {
      useHash: false, // quitar para que desaparezca el hash de la ruta
      enableTracing: false
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
