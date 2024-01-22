import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Recursos } from 'src/app/interfaces/recursos';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-catalog-resources',
  templateUrl: './catalog-resources.component.html',
  styleUrls: ['./catalog-resources.component.scss'],
})
export class CatalogResourcesComponent  implements OnInit {
  @Input() recursosSeleccionados : Recursos[] = [] as Recursos[];
  recursos : Recursos[] = [] as Recursos[];
  constructor(private modalCtrl : ModalController, private dataService : DataService) { }

  ngOnInit() {}

  async ionViewWillEnter(){
    await this.getResources()
  }

  getResources(){
    this.dataService.getResources().subscribe(
      (data:any)=>{
        console.log(data);
        const r = data.data as Recursos[];
  
        this.recursos = r.map((recurso:any) => ({
          ...recurso,
          selected: this.recursosSeleccionados.some(r => {return(r.recursoid === recurso.recursoid)}),
        }));

        console.log(this.recursos);
      }
      )
    this.recursos = []
  }

  
  closeModal(){
    this.modalCtrl.dismiss()
  }

  agregarRecursos(){
    const recursoSeleccionado = this.recursos.filter((recurso:any)=>
      recurso.selected
    )
    console.log(recursoSeleccionado);
    
    this.modalCtrl.dismiss(recursoSeleccionado)
  }

}
