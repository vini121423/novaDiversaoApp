import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DbzKaiPageRoutingModule } from './dbz-kai-routing.module';

import { DbzKaiPage } from './dbz-kai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DbzKaiPageRoutingModule
  ],
  declarations: [DbzKaiPage]
})
export class DbzKaiPageModule {}
