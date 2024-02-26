import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { EmployeeCatalogComponent } from './employee-catalog/employee-catalog.component';
import { FormControl, FormsModule } from '@angular/forms';
import { FormSubActivityComponent } from './form-sub-activity/form-sub-activity.component';
import { CatalogResourcesComponent } from './catalog-resources/catalog-resources.component';
import { FooterComponent } from './footer/footer.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    HeaderComponent,
    EmployeeCatalogComponent,
    FormSubActivityComponent,
    CatalogResourcesComponent,
    FooterComponent,
    SlidebarComponent,
    LoginComponent,
    RegisterComponent
  ],
  exports:[
    HeaderComponent,
    EmployeeCatalogComponent,
    FormSubActivityComponent,
    CatalogResourcesComponent,
    FooterComponent,
    SlidebarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ]
})
export class ComponentsModule { }
