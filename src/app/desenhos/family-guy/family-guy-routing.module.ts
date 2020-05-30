import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamilyGuyPage } from './family-guy.page';

const routes: Routes = [
  {
    path: '',
    component: FamilyGuyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamilyGuyPageRoutingModule {}
