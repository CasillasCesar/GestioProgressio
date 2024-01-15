import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectCatalogPageRoutingModule } from './project-catalog-routing.module';

import { ProjectCatalogPage } from './project-catalog.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectCatalogPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProjectCatalogPage]
})
export class ProjectCatalogPageModule {}
