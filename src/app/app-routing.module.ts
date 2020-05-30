import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'resgate',
    loadChildren: () => import('./filmes/resgate/resgate.module').then( m => m.ResgatePageModule)
  },
  {
    path: 'dois-irmaos',
    loadChildren: () => import('./filmes/dois-irmaos/dois-irmaos.module').then( m => m.DoisIrmaosPageModule)
  },
  {
    path: 'chernobyl',
    loadChildren: () => import('./series/chernobyl/chernobyl.module').then( m => m.ChernobylPageModule)
  },
  {
    path: 'la-casa-de-papel',
    loadChildren: () => import('./series/la-casa-de-papel/la-casa-de-papel.module').then( m => m.LaCasaDePapelPageModule)
  },
  {
    path: 'scooby',
    loadChildren: () => import('./desenhos/scooby/scooby.module').then( m => m.ScoobyPageModule)
  },
  {
    path: 'simpsons',
    loadChildren: () => import('./desenhos/simpsons/simpsons.module').then( m => m.SimpsonsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
