import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuridicaPage } from './juridica.page';

const routes: Routes = [
  {
    path: '',
    component: JuridicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuridicaPageRoutingModule {}
