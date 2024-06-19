import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';
import { SesiontimeoutComponent } from '../sesiontimeout/sesiontimeout.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData = { nombre_usuario: '', contrasena_usuario: '' };
  showPassword = false;

  constructor(private authService: AuthService, private dataService: DataService, private router: Router) { }

  onLogin(loginForm: NgForm) {
    if (loginForm.valid) {
      this.dataService.loginUser(this.loginData).subscribe({
        next: (response: any) => {
          console.log(response.message);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          // Mostrar mensaje de error dependiendo del código de estado
          if (error.status === 403) {
            alert("Cuenta no verificada. Por favor, verifica tu correo electrónico.");
          } else {
            alert(error.error || "Error de autenticación. Intenta de nuevo.");
          }
        }
      });
    }
  }
}