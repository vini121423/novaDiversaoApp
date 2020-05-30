import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DbzKaiPage } from './dbz-kai.page';

const routes: Routes = [
  {
    path: '',
    component: DbzKaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DbzKaiPageRoutingModule {}
