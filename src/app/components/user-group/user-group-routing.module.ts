import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGroupComponent } from 'src/app/components/user-group/user-group/user-group.component';
import { UserGroupStepperComponent } from 'src/app/components/user-group/user-group-stepper/user-group-stepper.component';

const routes: Routes = [{ path: '', component: UserGroupComponent, children: [
    {path: '', component: UserGroupStepperComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class UserGroupRoutingModule {}
