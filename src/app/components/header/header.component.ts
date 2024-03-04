import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  selected : string = '';
  constructor(private router : Router) { }

  ngOnInit() {}

  move(url:string){
    this.router.navigate([url]);
  }

}
