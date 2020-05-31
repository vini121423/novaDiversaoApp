import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeizedPageRoutingModule } from './seized-routing.module';

import { SeizedPage } from './seized.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeizedPageRoutingModule
  ],
  declarations: [SeizedPage]
})
export class SeizedPageModule {}
