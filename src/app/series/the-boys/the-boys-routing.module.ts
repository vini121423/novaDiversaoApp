import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TheBoysPage } from './the-boys.page';

const routes: Routes = [
  {
    path: '',
    component: TheBoysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheBoysPageRoutingModule {}
