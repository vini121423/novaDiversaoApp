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
  },
  {
    path: 'the-boys',
    loadChildren: () => import('./series/the-boys/the-boys.module').then( m => m.TheBoysPageModule)
  },
  {
    path: 'a-ilha-da-fantasia',
    loadChildren: () => import('./filmes/a-ilha-da-fantasia/a-ilha-da-fantasia.module').then( m => m.AIlhaDaFantasiaPageModule)
  },
  {
    path: 'trolls2',
    loadChildren: () => import('./filmes/trolls2/trolls2.module').then( m => m.Trolls2PageModule)
  },
  {
    path: 'remnant',
    loadChildren: () => import('./filmes/remnant/remnant.module').then( m => m.RemnantPageModule)
  },
  {
    path: 'seized',
    loadChildren: () => import('./filmes/seized/seized.module').then( m => m.SeizedPageModule)
  },
  {
    path: 'batman-ocavaleiro-das-trevas',
    loadChildren: () => import('./filmes/batman-ocavaleiro-das-trevas/batman-ocavaleiro-das-trevas.module').then( m => m.BatmanOCavaleiroDasTrevasPageModule)
  },
  {
    path: 'liga-da-justica-sombria',
    loadChildren: () => import('./filmes/liga-da-justica-sombria/liga-da-justica-sombria.module').then( m => m.LigaDaJusticaSombriaPageModule)
  },
  {
    path: 'looney-tunes-show',
    loadChildren: () => import('./desenhos/looney-tunes-show/looney-tunes-show.module').then( m => m.LooneyTunesShowPageModule)
  },
  {
    path: 'family-guy',
    loadChildren: () => import('./desenhos/family-guy/family-guy.module').then( m => m.FamilyGuyPageModule)
  },
  {
    path: 'dbz-kai',
    loadChildren: () => import('./desenhos/dbz-kai/dbz-kai.module').then( m => m.DbzKaiPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
