import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CareersComponent } from './careers.component';

const routes: Routes = [
  {
    path: '',
    component: CareersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareersRoutingModule { }
