import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaCasaDePapelPageRoutingModule } from './la-casa-de-papel-routing.module';

import { LaCasaDePapelPage } from './la-casa-de-papel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaCasaDePapelPageRoutingModule
  ],
  declarations: [LaCasaDePapelPage]
})
export class LaCasaDePapelPageModule {}
