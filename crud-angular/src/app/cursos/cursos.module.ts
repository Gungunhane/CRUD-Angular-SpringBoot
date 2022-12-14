import { SharedModule } from './../shared/shared.module';
import { ApMaterialModule } from './../shared/ap-material/ap-material.module';
import { CommonModule } from '@angular/common';
import { ApplicationModule, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos/cursos.component';


@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    ApMaterialModule,
    SharedModule
  ]
})
export class CursosModule { }
