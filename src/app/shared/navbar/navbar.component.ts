import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { User } from '../../auth/models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  public nombre: string;

  public subscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.subscription = this.store.select('auth')
      .pipe(
        filter(auth => auth.user != null)
      )
      .subscribe(
        auth => {
          this.nombre = auth.user.nombre;
          console.log(this.nombre);
        }
      );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

    this.subscription.unsubscribe();
  }
}
