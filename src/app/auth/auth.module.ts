import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Core
import { CoreModule } from '../core/core.module';

// Modulos Three Party
import { AngularFireAuthModule } from 'angularfire2/auth';

// Componentes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFireAuthModule,
    CoreModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule {}
