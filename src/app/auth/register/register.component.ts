import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';

// NGRX
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  loading: boolean;
  subscription: Subscription;

  constructor(public authSrv: AuthService, public store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('ui').subscribe(ui => (this.loading = ui.isLoading));
  }

  onSubmit(formulario: any): void {
    console.log('entra', formulario);
    this.authSrv.crearUsuario(
      formulario.nombre,
      formulario.email,
      formulario.password
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
