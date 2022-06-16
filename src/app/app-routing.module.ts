import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'inicio/:id',
    loadChildren: () => import('./inicio/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'modulos',
    loadChildren: () => import('./modulos/modulos.module').then( m => m.ModulosPageModule)
  },
  {
    path: 'denuncia',
    loadChildren: () => import('./denuncia/denuncia.module').then( m => m.DenunciaPageModule)
  },
  {
    path: 'noticiaid',
    loadChildren: () => import('./noticiaid/noticiaid.module').then( m => m.NoticiaidPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'directorio',
    loadChildren: () => import('./directorio/directorio.module').then( m => m.DirectorioPageModule)
  },
  {
    path: 'submodulos',
    loadChildren: () => import('./submodulos/submodulos.module').then( m => m.SubmodulosPageModule)
  },
  {
    path: 'flayers/:id1/:id2',
    loadChildren: () => import('./flayers/flayers.module').then( m => m.FlayersPageModule)
  },
  {
    path: 'contactos',
    loadChildren: () => import('./contactos/contactos.module').then( m => m.ContactosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
