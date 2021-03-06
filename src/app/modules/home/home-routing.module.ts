import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'premiere',
    loadChildren: () =>
      import(`@modules/premiere/premiere.module`).then((m) => m.PremiereModule),
  },
  {
    path: 'movies',
    loadChildren: () =>
      import(`@modules/movies/movies.module`).then((m) => m.MoviesModule),
  },
  {
    path: 'main',
    loadChildren: () =>
      import(`@modules/main/main.module`).then((m) => m.MainModule),
  },
  {
    path: '**',
    redirectTo: '/main',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
