import { Component, OnInit } from '@angular/core';

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

  stepClick(){
    let swiper = document.querySelector('#swiper');
    console.log(swiper);
    
  }

}
