import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FontawesomeModule } from './fontawesome/fontawesome.module';
import { CapitalizePipe } from './utils/capitalize.pipe';

@NgModule({
  imports: [
    AngularMaterialModule,
    FontawesomeModule
  ],
  declarations: [
    CapitalizePipe
  ],
  exports: [
    AngularMaterialModule,
    FontawesomeModule,
    CapitalizePipe
  ]
})
export class CoreModule { }
