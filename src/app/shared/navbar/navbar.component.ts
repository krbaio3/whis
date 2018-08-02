import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { User } from '../../auth/models/user.model';
import { ActivarSideBarAction, DesactivarSideBarAction } from '../ui.actions';
import { DiplaySideBar } from '../ui.types';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  public nombre: string;
  private displaySideBar: DiplaySideBar;

  public subscription: Subscription = new Subscription();
  public sideBarSubscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.subscription = this.store
      .select('auth')
      .pipe(filter(auth => auth.user != null))
      .subscribe(auth => {
        this.nombre = auth.user.nombre;
        console.log(this.nombre);
      });

    this.sideBarSubscription = this.store
      .select('ui')
      .pipe(filter(isSideBar => isSideBar.isOpenSideBar != null))
      .subscribe(showSideBar => {
        console.log(showSideBar);
        this.displaySideBar = showSideBar.isOpenSideBar;
      });
  }

  openSideBar() {
    if (this.displaySideBar === 'none') {
      this.store.dispatch(new ActivarSideBarAction());
    } else {
      this.store.dispatch(new DesactivarSideBarAction());
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

    this.subscription.unsubscribe();
  }
}
