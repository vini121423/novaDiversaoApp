import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoisIrmaosPageRoutingModule } from './dois-irmaos-routing.module';

import { DoisIrmaosPage } from './dois-irmaos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoisIrmaosPageRoutingModule
  ],
  declarations: [DoisIrmaosPage]
})
export class DoisIrmaosPageModule {}
