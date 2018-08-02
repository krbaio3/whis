import { Component, OnInit } from '@angular/core';
import { IngresosGastosService } from '../ingresos-gastos/ingresos-gastos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(public ingresoGastoSrv: IngresosGastosService) {}

  ngOnInit() {
    this.ingresoGastoSrv.initIngresoGastoListener();
  }
}
