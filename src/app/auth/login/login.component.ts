import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(public autSrv: AuthService) {}

  ngOnInit() {}

  onSubmit(formLogin: any): void {
    console.log(
      'entra en login component',
      formLogin
    );
    this.autSrv.logIn(formLogin.email, formLogin.password);
  }
}
