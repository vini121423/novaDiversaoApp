import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LigaDaJusticaSombriaPageRoutingModule } from './liga-da-justica-sombria-routing.module';

import { LigaDaJusticaSombriaPage } from './liga-da-justica-sombria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LigaDaJusticaSombriaPageRoutingModule
  ],
  declarations: [LigaDaJusticaSombriaPage]
})
export class LigaDaJusticaSombriaPageModule {}
