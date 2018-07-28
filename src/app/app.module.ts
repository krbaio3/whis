import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  faSave
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
  faSave
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
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
