import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BatmanOCavaleiroDasTrevasPageRoutingModule } from './batman-ocavaleiro-das-trevas-routing.module';

import { BatmanOCavaleiroDasTrevasPage } from './batman-ocavaleiro-das-trevas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BatmanOCavaleiroDasTrevasPageRoutingModule
  ],
  declarations: [BatmanOCavaleiroDasTrevasPage]
})
export class BatmanOCavaleiroDasTrevasPageModule {}
