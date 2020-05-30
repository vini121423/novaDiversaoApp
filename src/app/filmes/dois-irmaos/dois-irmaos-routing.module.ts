import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoisIrmaosPage } from './dois-irmaos.page';

const routes: Routes = [
  {
    path: '',
    component: DoisIrmaosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoisIrmaosPageRoutingModule {}
