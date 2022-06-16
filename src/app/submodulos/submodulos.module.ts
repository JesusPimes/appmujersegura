import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmodulosPageRoutingModule } from './submodulos-routing.module';

import { SubmodulosPage } from './submodulos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmodulosPageRoutingModule
  ],
  declarations: [SubmodulosPage]
})
export class SubmodulosPageModule {}
