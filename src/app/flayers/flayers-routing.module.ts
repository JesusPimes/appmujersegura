import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlayersPage } from './flayers.page';

const routes: Routes = [
  {
    path: '',
    component: FlayersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlayersPageRoutingModule {}
