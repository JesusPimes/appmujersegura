import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiaidPageRoutingModule } from './noticiaid-routing.module';

import { NoticiaidPage } from './noticiaid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiaidPageRoutingModule
  ],
  declarations: [NoticiaidPage]
})
export class NoticiaidPageModule {}
