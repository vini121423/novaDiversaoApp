import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LooneyTunesShowPageRoutingModule } from './looney-tunes-show-routing.module';

import { LooneyTunesShowPage } from './looney-tunes-show.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LooneyTunesShowPageRoutingModule
  ],
  declarations: [LooneyTunesShowPage]
})
export class LooneyTunesShowPageModule {}
