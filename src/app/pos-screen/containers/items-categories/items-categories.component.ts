import { Component, OnInit } from '@angular/core';
import { PosScreenFacade } from '../../pos-screen-facade';

@Component({
  selector: 'app-items-categories',
  templateUrl: './items-categories.component.html',
  styleUrls: ['./items-categories.component.css']
})
export class ItemsCategoriesComponent implements OnInit {

  constructor(private posScreenFacade:PosScreenFacade) {}

  ngOnInit() {
    this.posScreenFacade.loadCategories();
    
  }

}
