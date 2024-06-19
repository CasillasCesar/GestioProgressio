import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Breadcrumbs } from 'src/app/interfaces/breadcrumbs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent   {

  constructor(private router : Router) { }
  selected : string = '';
  breadcrumbs : Array<Breadcrumbs> = [{label:"Inicio",path:"/inicio"}];

  

  move(url:string, label ?: string, index ?: number){
    if(index==this.breadcrumbs.length-1){
      return
    }
    this.selected = url;
    this.router.navigate([url]);
    if(label){
      console.log(label);
      // console.log(index);
      if(label){
        if(this.breadcrumbs.length == 0){
          this.breadcrumbs[0] = {label : label, path : url}
        }else{
          // console.log(this.breadcrumbs[0].label==label);
          
          if(label!='xxx' && label != this.breadcrumbs[this.breadcrumbs.length-1].label){
            this.breadcrumbs.push({label:label,path:url})
          }
        }
      }
      if((index || index === 0)&&this.breadcrumbs.length > 1){
        // console.log(index);
        this.breadcrumbs.splice(index+1)
      }
    }else{
      this.popit()
    }
  }

  popit():void{
    console.log("Popeado");
    console.log(this.breadcrumbs);
    this.breadcrumbs.pop();
    console.log(this.breadcrumbs);
    let element = this.breadcrumbs[this.breadcrumbs.length-1]
    this.move(element.path,'xxx')
  }

}
