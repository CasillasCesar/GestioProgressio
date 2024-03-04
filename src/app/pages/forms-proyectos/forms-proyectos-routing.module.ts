import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsProyectosPage } from './forms-proyectos.page';

const routes: Routes = [
  {
    path: '',
    component: FormsProyectosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsProyectosPageRoutingModule {}
