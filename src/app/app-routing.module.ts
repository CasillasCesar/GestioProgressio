import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home/home.module';
import { ErrorComponent } from './components/error/error.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'project-catalog',
    loadChildren: () => import('./pages/project-catalog/project-catalog.module').then( m => m.ProjectCatalogPageModule)
  },
/*   {
    path: 'project-catalog/',
    loadChildren: () => import('./pages/project-catalog/project-catalog.module').then( m => m.ProjectCatalogPageModule)
  }, */
  {
    path: 'add-activity',
    loadChildren: () => import('./pages/add-activity/add-activity.module').then( m => m.AddActivityPageModule)
  },
  {path: '**', component: ErrorComponent}  // Cargar componente cuando la ruta es incorrecta


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
