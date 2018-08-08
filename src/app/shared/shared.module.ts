import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// CoreMdule
import { CoreModule } from '../core/core.module';

// Router Module
import { RouterModule } from '@angular/router';

// Componentes
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BillComponent } from '../bill/bill.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    BillComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    BillComponent
  ]
})
export class SharedModule { }
