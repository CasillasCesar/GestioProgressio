/* // non-auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NonAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Permite el acceso si no hay token o la sesión ha expirado
    if (!this.authService.isAuthenticated() || this.authService.sessionExpired) {
      return true;
    }

    // Redirige a home o alguna otra ruta si el usuario ya está autenticado
   // this.router.navigate(['/register']);  // Asegúrate de ajustar esto según tus necesidades
    return false;
  }
}
 */