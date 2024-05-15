import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

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

constructor(private dataService : DataService, private router : Router) {}

onSubmit(userForm: NgForm) {
  if (userForm.valid && this.user.contrasena === this.user.confirmarContrasena) {
    this.dataService.addUser(this.user).subscribe({
      next: (res: any) => {
        alert("Usuario registrado exitosamente.");
        console.log('Registro exitoso', res);
        userForm.reset();
        this.user = { nombreUsuario: '', correo: '', contrasena: '', confirmarContrasena: ''};
        this.router.navigate(['/login']); // Redireccionar al usuario a la página de inicio de sesión
      },
      error: (err: any) => {
        console.error('Error al registrar usuario', err);
        if (err.status === 409) {
          alert(err.error.message); // Mostrar el mensaje de error del servidor
        } else {
          alert("Error al registrar el usuario intenta más tarde.");
        }
      }
    });
  } else {
    alert("Las contraseñas no coinciden.");
  }
}


  ngOnInit() {}

}
