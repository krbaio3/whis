import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

// Idioma
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

// NGRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './app.reducer';

// Entornos
import { environment } from '../environments/environment';

// CoreModule
import { CoreModule } from './core/core.module';

// Modulo Autentificación
import { AuthModule } from './auth/auth.module';

// FireBase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IngresosGastosComponent } from './ingresos-gastos/ingresos-gastos.component';
import { EstadisticaComponent } from './ingresos-gastos/estadistica/estadistica.component';
import { DetalleComponent } from './ingresos-gastos/detalle/detalle.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

// Router
import { AppRoutingModule } from './app-routing.module';
import { OrdenIngresoGastoPipe } from './ingresos-gastos/orden-ingreso-gasto.pipe';

// Graficas
import { ChartsModule } from 'ng2-charts';
import { CapitalizePipe } from './utils/capitalize.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IngresosGastosComponent,
    EstadisticaComponent,
    DetalleComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    OrdenIngresoGastoPipe,
    CapitalizePipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AuthModule,
    AppRoutingModule,
    ChartsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
