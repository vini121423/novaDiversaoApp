import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AIlhaDaFantasiaPage } from './a-ilha-da-fantasia.page';

const routes: Routes = [
  {
    path: '',
    component: AIlhaDaFantasiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AIlhaDaFantasiaPageRoutingModule {}
