import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sesiontimeout',
  templateUrl: './sesiontimeout.component.html',
  styleUrls: ['./sesiontimeout.component.scss'],
})
export class SesiontimeoutComponent  implements OnInit{
  @Output() ifRefresh = new EventEmitter();
  showModal: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.sessionTimeoutWarning.subscribe(() => {
      if (localStorage.getItem('token')) {
        this.open();
      }
    });
  }

  open(): void {
    this.showModal = true;
  }
  
  close(): void {
    console.log(this.showModal);
    this.showModal = false;
    console.log(this.showModal);
  }

  refreshSession(): void {
    this.authService.refreshToken();
    this.close();
  }
}
