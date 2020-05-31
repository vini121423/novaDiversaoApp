import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemnantPage } from './remnant.page';

const routes: Routes = [
  {
    path: '',
    component: RemnantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemnantPageRoutingModule {}
