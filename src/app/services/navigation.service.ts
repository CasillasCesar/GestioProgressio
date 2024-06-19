import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private authService: AuthService, private router: Router) {}

  public checkAccess(route: string): void {
    if (!this.authService.isAuthenticated()) {
      if (route !== '/login' && route !== '/register') {
        this.router.navigate(['/login']);
      }
    }
  }
}