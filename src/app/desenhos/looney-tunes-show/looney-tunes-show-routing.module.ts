import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LooneyTunesShowPage } from './looney-tunes-show.page';

const routes: Routes = [
  {
    path: '',
    component: LooneyTunesShowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LooneyTunesShowPageRoutingModule {}
