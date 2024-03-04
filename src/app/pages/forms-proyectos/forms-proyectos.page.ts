import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms-proyectos',
  templateUrl: './forms-proyectos.page.html',
  styleUrls: ['./forms-proyectos.page.scss'],
})
export class FormsProyectosPage implements OnInit {

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
