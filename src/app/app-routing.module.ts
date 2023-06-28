import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'edad-page',
    loadChildren: () => import('./edad-page/edad-page.module').then( m => m.EdadPagePageModule)
  },
  {
    path: 'genero-page',
    loadChildren: () => import('./genero-page/genero-page.module').then( m => m.GeneroPagePageModule)
  },
  {
    path: 'universidad-page',
    loadChildren: () => import('./universidad-page/universidad-page.module').then( m => m.UniversidadPagePageModule)
  },
  {
    path: 'clima-page',
    loadChildren: () => import('./clima-page/clima-page.module').then( m => m.ClimaPagePageModule)
  },
  {
    path: 'future-new-page',
    loadChildren: () => import('./future-new-page/future-new-page.module').then( m => m.FutureNewPagePageModule)
  },
  {
    path: 'contrateme',
    loadChildren: () => import('./contrateme/contrateme.module').then( m => m.ContratemePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
