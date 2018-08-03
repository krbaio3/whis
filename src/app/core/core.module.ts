import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FontawesomeModule } from './fontawesome/fontawesome.module';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    FontawesomeModule
  ],
  declarations: [],
  exports: [
    AngularMaterialModule,
    FontawesomeModule
  ]
})
export class CoreModule { }
