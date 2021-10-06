import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserGroupComponent } from './user-group/user-group.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserGroupComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UserGroupModule { }
