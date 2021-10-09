import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserGroupComponent } from './user-group/user-group.component';
import { UserGroupStepperComponent } from './user-group-stepper/user-group-stepper.component';
import { UserGroupRoutingModule } from 'src/app/components/user-group/user-group-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserGroupComponent,
    UserGroupStepperComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserGroupRoutingModule
  ]
})
export class UserGroupModule { }
