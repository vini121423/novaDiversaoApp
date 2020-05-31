import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeizedPage } from './seized.page';

const routes: Routes = [
  {
    path: '',
    component: SeizedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeizedPageRoutingModule {}
