import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGroupComponent } from 'src/app/components/user-group/user-group/user-group.component';

const routes: Routes = [{ path: '', component: UserGroupComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class UserGroupRoutingModule {}
