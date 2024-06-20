import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { SesiontimeoutComponent } from './components/sesiontimeout/sesiontimeout.component';
import { AuthService } from './services/auth.service';

// register Swiper custom elements
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(SesiontimeoutComponent)
  timeoutAlert!: SesiontimeoutComponent;

  constructor(private authService: AuthService) {}

  isLoged = false;
  ngOnInit(): void {
    this.authService.setupActivityListener();
    this.authService.sessionChange.subscribe((value)=>{
      this.isLoged = value;
    })
  }
  
  
}
