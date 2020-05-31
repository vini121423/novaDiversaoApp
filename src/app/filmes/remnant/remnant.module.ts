import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemnantPageRoutingModule } from './remnant-routing.module';

import { RemnantPage } from './remnant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemnantPageRoutingModule
  ],
  declarations: [RemnantPage]
})
export class RemnantPageModule {}
