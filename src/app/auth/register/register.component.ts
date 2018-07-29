import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public authSrv: AuthService) { }

  ngOnInit() {
  }

  onSubmit(formulario: any): void {
    console.log('entra', formulario);
    this.authSrv.crearUsuario(formulario.nombre, formulario.email, formulario.password);  
  }

}
