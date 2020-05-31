import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Trolls2PageRoutingModule } from './trolls2-routing.module';

import { Trolls2Page } from './trolls2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Trolls2PageRoutingModule
  ],
  declarations: [Trolls2Page]
})
export class Trolls2PageModule {}
