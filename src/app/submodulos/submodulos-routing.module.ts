import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmodulosPage } from './submodulos.page';

const routes: Routes = [
  {
    path: '',
    component: SubmodulosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmodulosPageRoutingModule {}
