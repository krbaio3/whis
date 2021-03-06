import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import Swal from 'sweetalert2';
import { User } from '../../auth/models/user.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { filter } from 'rxjs/operators';
import { IngresosGastosService } from '../../ingresos-gastos/ingresos-gastos.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  public nombre: string;
  public withSideBar: string;
  public subscription: Subscription = new Subscription();
  public sideBarSubscription: Subscription = new Subscription();

  constructor(
    public authSrv: AuthService,
    private store: Store<AppState>,
    public ingresoGastoSrv: IngresosGastosService
  ) {}

  ngOnInit(): void {
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
        this.withSideBar = showSideBar.isOpenSideBar;
      });
  }

  signOut(): void {
    this.authSrv.logOut();
    this.ingresoGastoSrv.cancelarSubscripciones();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.sideBarSubscription.unsubscribe();
  }
}
