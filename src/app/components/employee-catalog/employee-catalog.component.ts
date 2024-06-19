import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Personal } from 'src/app/interfaces/personal';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-catalog',
  templateUrl: './employee-catalog.component.html',
  styleUrls: ['./employee-catalog.component.scss'],
})
export class EmployeeCatalogComponent  implements OnInit {

  @Input() personalAsignado: any[] = []; // Recibe la lista de personal asignado como entrada
  @Input() encargadoId :any ;
  personas : Personal[] = [];

  constructor(private modalCtrl : ModalController, private dataService : DataService, private authService: AuthService, private router : Router) { }

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);  // Redirige a login si no está autenticado
    }
  }

  async ionViewWillEnter(){
    if(this.personalAsignado.length == 0 || this.encargadoId){
      await this.getEmployees()
    }else{
      this.personas = this.personalAsignado
    }
  }

  async getEmployees() {
    await this.dataService.getEmployeesWID(this.encargadoId).subscribe(
      (data) => {        
        const p = data.data as Personal[];
  
        this.personas = p.map(persona => ({
          ...persona,
          selected: this.personalAsignado.some(p => {return(p.personaid === persona.personaid)}),
        }));

        console.log(this.personas);
        
      },
      (error) => {
        console.error(error);
      },
      () => {
        console.log("Termino");
      }
    );
  }
  

  closeModal(){
    this.modalCtrl.dismiss()
  }

  agregarPersonal(){
    const personalSeleccionado = this.personas.filter(persona=>
      persona.selected
    )
    
    this.modalCtrl.dismiss(personalSeleccionado)
  }

}
