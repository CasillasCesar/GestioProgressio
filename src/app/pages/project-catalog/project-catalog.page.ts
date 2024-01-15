import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-catalog',
  templateUrl: './project-catalog.page.html',
  styleUrls: ['./project-catalog.page.scss'],
})
export class ProjectCatalogPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSearchChange(event:any){
    console.log(event.detail.value);
  }

}
