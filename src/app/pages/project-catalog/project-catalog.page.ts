import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/interfaces/proyecto';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-project-catalog',
  templateUrl: './project-catalog.page.html',
  styleUrls: ['./project-catalog.page.scss'],
})
export class ProjectCatalogPage implements OnInit {
  constructor(private dataService : DataService, private router : Router) { }

  proyectos : Proyecto[]= [] as Proyecto[];
  filtrados : Proyecto[]= [] as Proyecto[];

  ngOnInit() {
    this.dataService.getProjects().subscribe(
      (data:any)=>{
        console.log(data);
        this.proyectos = data.data;
        console.log(this.proyectos);
        
      },
      (error:any)=>{
        console.log(error);
      },
      ()=>{
        this.filtrados = [...this.proyectos]
        console.log(this.filtrados);
        
      })
  }

  onSearchChange(event:any){
    console.log(event);
    
    let filtro = event.detail.value.toLowerCase();
    if(filtro && filtro != ''){
      this.filtrados = this.proyectos.filter(proyecto=>{
        const nombre = proyecto.nombre.toLowerCase();
        const encargado = proyecto.nombreencargado.toLowerCase();
        return(
          nombre.includes(filtro) || encargado.includes(filtro)
        );
      })
    }else{
      console.log('salio');
      this.filtrados=[...this.proyectos]
    }
  }

  move(proyecto : Proyecto){
    this.dataService.setProyecto(proyecto);
    this.router.navigate(["/add-activity"])
  }



}
  