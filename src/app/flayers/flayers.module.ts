import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlayersPageRoutingModule } from './flayers-routing.module';

import { FlayersPage } from './flayers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlayersPageRoutingModule
  ],
  declarations: [FlayersPage]
})
export class FlayersPageModule {}
