import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from './careers-routing.module';
import { CareersComponent } from './careers.component';


@NgModule({
  declarations: [
    CareersComponent
  ],
  imports: [
    CommonModule,
    CareersRoutingModule
  ]
})
export class CareersModule { }
