import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { EmployeeCatalogComponent } from './employee-catalog/employee-catalog.component';
import { FormControl, FormsModule } from '@angular/forms';
import { FormSubActivityComponent } from './form-sub-activity/form-sub-activity.component';
import { CatalogResourcesComponent } from './catalog-resources/catalog-resources.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    EmployeeCatalogComponent,
    FormSubActivityComponent,
    CatalogResourcesComponent,
    FooterComponent
  ],
  exports:[
    HeaderComponent,
    EmployeeCatalogComponent,
    FormSubActivityComponent,
    CatalogResourcesComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ]
})
export class ComponentsModule { }
