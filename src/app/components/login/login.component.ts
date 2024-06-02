import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData = { nombre_usuario: '', contrasena_usuario: '' };

  constructor(private dataService: DataService, private router: Router) {}

  onLogin(loginForm: NgForm) {
    if (loginForm.valid) {
      this.dataService.loginUser({
        nombre_usuario: this.loginData.nombre_usuario,
        contrasena_usuario: this.loginData.contrasena_usuario
      }).subscribe({
        next: (response: any) => {
          console.log(response.message);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          alert(error.error);
        }
      });
    }
  }
}
