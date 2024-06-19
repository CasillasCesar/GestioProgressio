import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

public user: any = {
    nombreUsuario: '',
    correo: '',
    contrasena: '',
    confirmarContrasena: ''
};
showPassword: boolean = false;
showConfirmPassword: boolean = false;

constructor(private dataService : DataService, private router : Router, private authService: AuthService) {}

onSubmit(userForm: NgForm) {
  if (userForm.valid && this.user.contrasena === this.user.confirmarContrasena) {
    this.dataService.addUser(this.user).subscribe({
      next: (res) => {
        console.log('Registro exitoso', res);
        alert("Usuario registrado exitosamente. Por favor verifica tu correo electrónico para activar la cuenta.");
        userForm.reset();
        this.user = { nombreUsuario: '', correo: '', contrasena: '', confirmarContrasena: ''};
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Error al registrar usuario', err);
        alert("Error al registrar el usuario. " + (err.error.message || "Intenta más tarde."));
      }
    });
  } else {
    alert("Las contraseñas no coinciden.");
  }
}

toggleVisibility() {
  this.showPassword = !this.showPassword;
}

toggleConfirmPasswordVisibility() {
  this.showConfirmPassword = !this.showConfirmPassword;
}

ngOnInit(): void {
  this.authService.logout(false);
}

}
