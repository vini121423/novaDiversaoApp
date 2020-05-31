import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LigaDaJusticaSombriaPage } from './liga-da-justica-sombria.page';

const routes: Routes = [
  {
    path: '',
    component: LigaDaJusticaSombriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LigaDaJusticaSombriaPageRoutingModule {}
