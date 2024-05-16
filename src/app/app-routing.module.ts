import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home/home.module';
import { ErrorComponent } from './components/error/error.component';
import { FormsProyectosPageModule } from './pages/forms-proyectos/forms-proyectos.module';

import { SlidebarComponent } from './components/slidebar/slidebar.component';
import { LoginComponent } from './components/login/login.component';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';

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
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forms-proyectos',
    loadChildren: () => import('./pages/forms-proyectos/forms-proyectos.module').then( m => m.FormsProyectosPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./pages/test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: '**', 
    component: ErrorComponent // Cargar componente cuando la ruta es incorrecta
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
