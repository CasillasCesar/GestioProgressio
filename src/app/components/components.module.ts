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
import { HeaderLoggedComponent } from './header-logged/header-logged.component';
import { SesiontimeoutComponent } from './sesiontimeout/sesiontimeout.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderLoggedComponent,
    EmployeeCatalogComponent,
    FormSubActivityComponent,
    CatalogResourcesComponent,
    FooterComponent,
    SlidebarComponent,
    LoginComponent,
    RegisterComponent,
    SesiontimeoutComponent
    
    
  ],
  exports:[
    HeaderComponent,
    HeaderLoggedComponent,
    EmployeeCatalogComponent,
    FormSubActivityComponent,
    CatalogResourcesComponent,
    FooterComponent,
    SlidebarComponent,
    LoginComponent,
    RegisterComponent,
    SesiontimeoutComponent
    
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    
  ]
})
export class ComponentsModule { }
