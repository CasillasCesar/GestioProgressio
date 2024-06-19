import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forms-proyectos',
  templateUrl: './forms-proyectos.page.html',
  styleUrls: ['./forms-proyectos.page.scss'],
})
export class FormsProyectosPage implements OnInit {

  public project: any;
  public campo!: string;



  constructor(private dataService : DataService, private router : Router, private authService: AuthService) { 
    this.project = {
      nombre: '',
      responsable: '',
      descripcion: '',
      fechainicio: '',
      fechafin: ''
    }
  }



  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);  // Redirige a login si no está autenticado
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.dataService.addProject(this.project).subscribe({
        next: (res: any) => {
          alert("Proyecto registrado");
          console.log('Registro exitoso', res);
          form.reset();  // Resetea el formulario tras el registro exitoso
          this.project = { nombre: '', responsable: '', fechaInicio: null, fechaFin: null, descripcion: '' };  // Resetea el objeto project
          this.router.navigate(['/project-catalog']);
        },
        error: (err: any) => console.error('Error registrando el proyecto', err)
      });
    }
  }


}
