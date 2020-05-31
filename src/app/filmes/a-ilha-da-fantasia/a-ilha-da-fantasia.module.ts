import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AIlhaDaFantasiaPageRoutingModule } from './a-ilha-da-fantasia-routing.module';

import { AIlhaDaFantasiaPage } from './a-ilha-da-fantasia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AIlhaDaFantasiaPageRoutingModule
  ],
  declarations: [AIlhaDaFantasiaPage]
})
export class AIlhaDaFantasiaPageModule {}
