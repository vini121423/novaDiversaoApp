import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamilyGuyPageRoutingModule } from './family-guy-routing.module';

import { FamilyGuyPage } from './family-guy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamilyGuyPageRoutingModule
  ],
  declarations: [FamilyGuyPage]
})
export class FamilyGuyPageModule {}
