import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';

// NGRX + RXJS
import { AppState } from '../../app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loading: boolean;
  subscription: Subscription;

  constructor(public autSrv: AuthService, public store: Store<AppState>) {}

  ngOnInit() {
    this.subscription = this.store
      .select('ui')
      .subscribe(ui => (this.loading = ui.isLoading));
  }

  onSubmit(formLogin: any): void {
    console.log('entra en login component', formLogin);
    this.autSrv.logIn(formLogin.email, formLogin.password);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
