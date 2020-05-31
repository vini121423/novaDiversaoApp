import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TheBoysPageRoutingModule } from './the-boys-routing.module';

import { TheBoysPage } from './the-boys.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TheBoysPageRoutingModule
  ],
  declarations: [TheBoysPage]
})
export class TheBoysPageModule {}
