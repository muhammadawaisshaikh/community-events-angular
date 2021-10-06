import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./components/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./components/blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./components/events/events.module').then((m) => m.EventsModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./components/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'careers',
    loadChildren: () =>
      import('./components/careers/careers.module').then((m) => m.CareersModule),
  },
  {
    path: 'user-group',
    loadChildren: () =>
      import('./components/user-group/user-group.module').then((m) => m.UserGroupModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
