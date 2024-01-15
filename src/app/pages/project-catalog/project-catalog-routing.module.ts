import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectCatalogPage } from './project-catalog.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectCatalogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectCatalogPageRoutingModule {}
