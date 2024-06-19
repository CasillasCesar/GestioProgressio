
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { CatalogResourcesComponent } from 'src/app/components/catalog-resources/catalog-resources.component';
import { EmployeeCatalogComponent } from 'src/app/components/employee-catalog/employee-catalog.component';
import { FormSubActivityComponent } from 'src/app/components/form-sub-activity/form-sub-activity.component';
import { Personal } from 'src/app/interfaces/personal';
import { Proyecto } from 'src/app/interfaces/proyecto';
import { Recursos } from 'src/app/interfaces/recursos';
import { SubActividad } from 'src/app/interfaces/sub-actividad';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.page.html',
  styleUrls: ['./add-activity.page.scss'],
})
export class AddActivityPage implements OnInit {

  actividades : any = [];
  
  proyecto: Proyecto = {} as Proyecto;

  formulario: any;

  actividad = {
    proyectoId : 0,
    nombreActividad: '',
    fechaInicio: '',
    fechaFin: '',
    personalAsignado: [] as Personal[],
    descripcion: '',
    areSubActividades: false,
    subActividades: [] as SubActividad[],
    recursos: [] as Recursos[]
  };

  constructor(
    private modalController: ModalController,
    private dataService: DataService,
    private router: Router,
    private fb: FormBuilder,
    private loadingCtrl: LoadingController
  ) {}


  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombreActividad: ['', Validators.required],
      fechaInicio: ['', [Validators.required, this.fechaValidator]],
      fechaFin: [''],
    });
  }

  ionViewWillEnter() {
    this.proyecto = this.dataService.getSelectedProject();
    if (!this.proyecto.nombre) {
      this.router.navigate(['/project-catalog']);
    }
    this.actividad.proyectoId = parseInt(this.proyecto.proyectoid)
  }

  onSubmit() {
    console.log('Formulario enviado:', this.actividad);
    // Puedes agregar lógica adicional aquí, como enviar datos al servidor.
  }

  fechaValidator(control : any) {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();

    const minDate = new Date('2024-01-01');
    const maxDate = new Date('2024-12-31');

    if (selectedDate < minDate || selectedDate > maxDate) {
      return { fechaInvalida: true };
    }

    return null;
  }

  async openPersonalModal() {
    const modal = await this.modalController.create({
      component: EmployeeCatalogComponent,
      componentProps: {
        personalAsignado: this.actividad.personalAsignado,
        encargadoId : this.proyecto.encargadoid
      }
    });

    modal.onDidDismiss().then((data: any) => {
      console.log(data);
      
      if (data.data) {
        this.actividad.personalAsignado = data.data;
      }
    });

    return await modal.present();
  }

  async openRecursoModal() {
    const modal = await this.modalController.create({
      component: CatalogResourcesComponent,
      componentProps: {
        recursosSeleccionados: this.actividad.recursos,
      }
    });

    modal.onDidDismiss().then((data: any) => {
      console.log(data);
      
      if (data.data) {
        this.actividad.recursos = data.data;
      }
    });

    return await modal.present();
  }

  async openSubActividadModal() {
    console.log(this.actividad.fechaInicio);
    console.log(this.actividad.fechaFin);
    console.log(this.actividad.personalAsignado.length > 0);
    
    const modal = await this.modalController.create({
      component: FormSubActivityComponent,
      componentProps: {
        subActividades: this.actividad.subActividades,
        personalAsignado : this.actividad.personalAsignado,
        fechaInicio : this.actividad.fechaInicio,
        fechaFin : this.actividad.fechaFin
      }
    });

    modal.onDidDismiss().then((data: any) => {
      console.log(data);
      if (data.data) {
        this.actividad.subActividades.push(data.data);
      }
    });

    return await modal.present();
  }

  removePersonal(persona: any) {
    this.actividad.personalAsignado = this.actividad.personalAsignado.filter(p => p !== persona);
  }

  removeRecurso(recurso: any) {
    this.actividad.recursos = this.actividad.recursos.filter(r => r !== recurso);
  }

  removeSubActividad(subActividad: any) {
    this.actividad.subActividades = this.actividad.subActividades.filter(s => s !== subActividad);
  }

  formatearFecha(fecha: string): string {
    const date = new Date(fecha)
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  sendData(){
    console.log(this.actividad); 
    this.actividades.push(this.actividad)
    this.limpiarFormulario()
    console.log(this.actividades);
    
  }

  limpiarFormulario(){
    this.actividad = {
      proyectoId : parseInt(this.proyecto.proyectoid),
      nombreActividad: '',
      fechaInicio: '',
      fechaFin: '',
      personalAsignado: [] as Personal[],
      descripcion: '',
      areSubActividades: false,
      subActividades: [] as SubActividad[],
      recursos: [] as Recursos[]
    };
  }

  removeActividad(actividad : any){
    this.actividades = this.actividades.filter((s:any) => s != actividad)
  }

  // saveData(){
  //   console.log(this.actividades);
  //   this.dataService.sendMails(this.actividades)
  // }

  async saveData(){
    const ctrl = await this.loadingCtrl.create({
      message : 'Espere en lo que se guarda la información'
    });
    ctrl.present()
    await this.actividades.forEach((actividad:any)=>{
      console.log(actividad);
      
      this.dataService.addFullActivity(actividad).subscribe((data)=>{this.removeActividad(actividad)})
    });
    await ctrl.dismiss()
    this.router.navigate(['/project-catalog'])
  }

}
