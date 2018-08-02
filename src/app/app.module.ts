import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

// Idioma
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// NGRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './app.reducer';

// Entornos
import { environment } from '../environments/environment';

// Iconos
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheckCircle,
  faClipboardList,
  faSignOutAlt,
  faTable,
  faTachometerAlt,
  faMoneyBillAlt,
  faExclamationCircle,
  faShippingFast,
  faSave,
  faSpinner,
  faTrashAlt,
  faBuilding
} from '@fortawesome/free-solid-svg-icons';

// Add an icon to the library for convenient access in other components
library.add(
  faCheckCircle,
  faClipboardList,
  faSignOutAlt,
  faTable,
  faTachometerAlt,
  faMoneyBillAlt,
  faExclamationCircle,
  faShippingFast,
  faSave,
  faSpinner,
  faTrashAlt,
  faBuilding
);

// Angular Material Module
// import { AngularMaterialModule } from './angular-material/angular-material.module';

// FireBase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
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

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    IngresosGastosComponent,
    EstadisticaComponent,
    DetalleComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    OrdenIngresoGastoPipe
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
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
    AngularFireAuthModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
