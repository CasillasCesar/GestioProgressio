import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormsProyectosPageRoutingModule } from './forms-proyectos-routing.module';

import { FormsProyectosPage } from './forms-proyectos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsProyectosPageRoutingModule
  ],
  declarations: [FormsProyectosPage]
})
export class FormsProyectosPageModule {}
