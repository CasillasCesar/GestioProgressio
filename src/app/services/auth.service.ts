import { Injectable, EventEmitter, HostListener } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SesiontimeoutComponent } from '../components/sesiontimeout/sesiontimeout.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:3000'; // Si se desea volver a usar solo tengo que cambiar la URL
  public sessionTimeoutWarning = new EventEmitter<void>();
  public sessionChange = new EventEmitter<boolean>();
  
  
  constructor(private http: HttpClient, private router: Router) { }

  showModal = false;
  tokenTimer: any;
  sessionExpired: boolean = false;

  public get isSessionExpired(): boolean {
    return this.sessionExpired;
  }


  login(username: string, password: string): void {
    this.http.post(`${this.apiUrl}/login`, { username, password }).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        this.startTokenTimer();
        this.setupActivityListener();  // Configurar listeners de actividad después del inicio de sesión
        this.sessionChange.emit(true);
      });
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }

    try {
      const decodedToken = this.decodeToken(token);
      // Verifica que el token tenga la propiedad exp y que no haya expirado.
      return (decodedToken.exp * 1000 > Date.now());
    } catch (e) {
      console.error('Error decoding token', e);
      return false;
    }
  }

  setupActivityListener(): void {
    window.addEventListener('click', () => this.resetSessionTimer());
    window.addEventListener('scroll', () => this.resetSessionTimer(), true);
  }



  startTokenTimer(): void {
    const token = localStorage.getItem('token');
    if (!token) return;

    const decodedToken = this.decodeToken(token);
    const timeUntilExpiration = decodedToken.exp * 1000 - Date.now();
    const alertTime = 15000; // Emitir alerta 15 segundos antes de la expiración

    // Limpiar cualquier temporizador existente antes de establecer uno nuevo
    if (this.tokenTimer) {
      clearTimeout(this.tokenTimer);
    }

    this.tokenTimer = setTimeout(() => {
      if (localStorage.getItem('token')) {
        this.sessionTimeoutWarning.emit();
      }
    }, timeUntilExpiration - alertTime);
  }

  refreshToken(): void {
    const token = localStorage.getItem('token');
    if (!token) {
      this.logout();
      return;
    }

    this.http.post(`${this.apiUrl}/refresh-token`, { token }).subscribe(
      (response: any) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.startTokenTimer(); // Reiniciar el temporizador con el nuevo token
        } else {
          console.error('No new token received');
          this.logout(); // Si el servidor no devuelve un nuevo token, cerrar sesión
        }
      }, error => {
        console.error('Failed to refresh token', error);
        this.logout();
      });
  }

logout(redirect: boolean = true): void {
    localStorage.removeItem('token');
    this.sessionChange.emit(false);
    if (this.tokenTimer) {
      clearTimeout(this.tokenTimer);
    }
    this.sessionExpired = true;  // Marca la sesión como expirada

    if (redirect) {
      /* this.router.navigate(['/login']).then(() => {
        // Opcionalmente resetear el estado aquí si es necesario
        setTimeout(() => this.sessionExpired = false, 200);
      }); */
      setTimeout(() => this.sessionExpired = false, 200);
    } else {
      // Incluso si no redirigimos, reseteamos el estado después de un breve retraso
      setTimeout(() => this.sessionExpired = false, 200);
    }
  }

  private decodeToken(token: string): any {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      return JSON.parse(window.atob(base64));
    } catch (e) {
      console.error('Error decoding token', e);
      return null;
    }
  }

  @HostListener('document:click', ['$event'])
  @HostListener('document:scroll', ['$event'])
  handleUserActivity(event: Event) {
    this.resetSessionTimer();
  }

  resetSessionTimer(): void {
    // Llama a refreshToken si es necesario
    this.refreshToken();
  }

}


