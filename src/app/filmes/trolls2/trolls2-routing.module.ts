import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Trolls2Page } from './trolls2.page';

const routes: Routes = [
  {
    path: '',
    component: Trolls2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Trolls2PageRoutingModule {}
