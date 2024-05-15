import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

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

}
