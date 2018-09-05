import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// CoreMdule
import { CoreModule } from '../core/core.module';

// Router Module
import { RouterModule } from '@angular/router';

// Componentes
import { FooterComponent } from './footer/footer.component';
// import { NavbarComponent } from './navbar/navbar.component';
import { NavBarComponent2 } from './nav-bar/nav-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [
    FooterComponent,
    // NavbarComponent,
    SidebarComponent,
    NavBarComponent2
  ],
  exports: [
    FooterComponent,
    NavBarComponent2,
    SidebarComponent,
    // NavBarComponent
  ]
})
export class SharedModule {}
