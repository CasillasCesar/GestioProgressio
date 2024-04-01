import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breadcrumbs } from 'src/app/interfaces/breadcrumbs';

@Component({
  selector: 'app-header-logged',
  templateUrl: './header-logged.component.html',
  styleUrls: ['./header-logged.component.scss'],
})
export class HeaderLoggedComponent  implements OnInit {

  constructor(private router : Router) { }
  selected : string = '';
  breadcrumbs : Array<Breadcrumbs> = [];

  ngOnInit() {}

  move(url:string, label ?: string, index ?: number){
    // console.log(this.breadcrumbs);
    // console.log(index);
    
    
    this.selected = url;
    this.router.navigate([url]);
    if(label){
      if(this.breadcrumbs.length == 0){
        this.breadcrumbs[0] = {label : label, path : url}
      }else{
        this.breadcrumbs.push({label:label,path:url})
      }
    }
    if((index || index === 0)&&this.breadcrumbs.length > 1){
      // console.log(index);
      this.breadcrumbs.splice(index+1)
    }
  }

  popit():void{
    this.breadcrumbs.pop();
  }

}
