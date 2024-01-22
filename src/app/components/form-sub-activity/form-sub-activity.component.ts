import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Personal } from 'src/app/interfaces/personal';
import { EmployeeCatalogComponent } from '../employee-catalog/employee-catalog.component';
import { SubActividad } from 'src/app/interfaces/sub-actividad';

@Component({
  selector: 'app-form-sub-activity',
  templateUrl: './form-sub-activity.component.html',
  styleUrls: ['./form-sub-activity.component.scss'],
})
export class FormSubActivityComponent  implements OnInit {
  @Input() personalAsignado : Personal[] = [];
  @Input() proyectoid : number = 0;
  @Input() fechaInicio : any;
  @Input() fechaFin : any;
  actividad : SubActividad = {
    nombre: '',
    fechaInicio: '',
    fechaFin: '',
    personalAsginado: {} as Personal,
    descripcion: '',
    pkProyectoID : this.proyectoid
  };
  constructor(private modalController : ModalController) { }
  personalA : any ;

  ngOnInit() {}

  async openPersonalModal() {
    const modal = await this.modalController.create({
      component: EmployeeCatalogComponent,
      componentProps: {
        personalAsignado: this.personalAsignado,
      }
    });

    modal.onDidDismiss().then((data: any) => {
      console.log(data);
      
      if (data.data) {
        this.actividad.personalAsginado = data.data;
      }
    });

    return await modal.present();
  }

  // removePersonal(persona: any) {
  //   this.actividad.personalAsginado = this.actividad.personalAsginado
  // }

  onSubmit(){    
    // Array.isArray(data.data) ? data.data[0] : data.data
    this.modalController.dismiss(this.actividad)
  }

  obtenerPersonal(event:any){
    console.log(event.detail.value);
    this.actividad.personalAsginado = event.detail.value;
  }

}
