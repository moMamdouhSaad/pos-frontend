import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoriesAndItemsFacade } from '../../categoriesAndItems-facade';

@Component({
  selector: 'app-items-categories',
  templateUrl: './items-categories.component.html',
  styleUrls: ['./items-categories.component.css']
})
export class ItemsCategoriesComponent implements OnInit {

  constructor(private posScreenFacade:CategoriesAndItemsFacade) {}
  @Output() onItemClicked = new EventEmitter<{product_name:string,product_price:number}>();

  ngOnInit() {
    this.posScreenFacade.loadCategories();
    this.posScreenFacade.loadProducts();
  }

  itemClicked(item){
    this.onItemClicked.next(item)
  }

}
