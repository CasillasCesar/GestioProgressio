import { state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import {backInRight} from 'ng-animate'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  animations : [
    trigger('backInRight',[
      state('visible', style({})),
      transition('* => *', useAnimation(backInRight))])
  ]
})
export class InicioPage implements OnInit {
  backInRight : any;
  @ViewChild('miElemento') elemento: ElementRef | any;
  estadoAnimacion : string = 'hidden';

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    
  }

  stepClick(i:number){
    let swiper = document.querySelector('#swiper') as SwiperContainer;
    console.log(swiper);
    swiper.swiper.slideTo(i)
  }

  ngAfterViewInit(){
    let observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // console.log(1000);
          this.estadoAnimacion = 'visible';  // Cambia el estado para activar la animación
        }else{
          this.estadoAnimacion = 'hidden';  // Cambia el estado para activar la animación
        }
      });
    }, { threshold: 0.1 });  // Configura la proporción del elemento que debe ser visible para activar la animación
  
    observer.observe(this.elemento.nativeElement);
  }

}
