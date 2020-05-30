import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaCasaDePapelPage } from './la-casa-de-papel.page';

const routes: Routes = [
  {
    path: '',
    component: LaCasaDePapelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaCasaDePapelPageRoutingModule {}
