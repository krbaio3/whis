import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(public authSrv: AuthService) {}

  ngOnInit() {}

  signOut(): void {
    this.authSrv.logOut();
  }
}
