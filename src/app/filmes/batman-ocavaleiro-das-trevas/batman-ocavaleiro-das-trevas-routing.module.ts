import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BatmanOCavaleiroDasTrevasPage } from './batman-ocavaleiro-das-trevas.page';

const routes: Routes = [
  {
    path: '',
    component: BatmanOCavaleiroDasTrevasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BatmanOCavaleiroDasTrevasPageRoutingModule {}
