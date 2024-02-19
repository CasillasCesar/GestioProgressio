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

  
  public user: any;
  public campo!: string;


  constructor(private dataService : DataService, private router : Router) { 
    this.user = {
      nombre: '',
      responsable: '',
      biografia: '',
      genero: ''
    }
  }



  ngOnInit() {

  }

  onSubmit(){
    alert("Enviado");
    console.log(this.user);
  }

  esClic(){
    alert("Has dado clic");
  }

  hasSalido(){
    alert("Has salido");
  }

  pressBoton(){
    alert("Has pulsado enter");
  }


}
