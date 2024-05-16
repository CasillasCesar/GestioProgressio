import { state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { backInLeft, backInRight } from 'ng-animate';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  animations : [
    trigger('backInRight',[
      state('visible', style({})),
      transition('* => *', useAnimation(backInRight))]),
    trigger('backInLeft',[
      state('visible', style({})),
      transition('* => *', useAnimation(backInLeft))])
  ]
})
export class AboutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
