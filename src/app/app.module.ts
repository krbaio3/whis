import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

// Idioma
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Router
import { AppRoutingModule } from './app-routing.module';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AuthModule,
    AppRoutingModule,
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
