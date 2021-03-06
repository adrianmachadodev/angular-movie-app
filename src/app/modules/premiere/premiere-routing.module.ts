import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PremierePageComponent } from './pages/premiere-page/premiere-page.component';

const routes: Routes = [
  {
    path: '',
    component: PremierePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PremiereRoutingModule {}
