import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuridicaPageRoutingModule } from './juridica-routing.module';

import { JuridicaPage } from './juridica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuridicaPageRoutingModule
  ],
  declarations: [JuridicaPage]
})
export class JuridicaPageModule {}
