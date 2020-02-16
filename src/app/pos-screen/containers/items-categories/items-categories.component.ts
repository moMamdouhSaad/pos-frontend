import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoriesAndItemsFacade } from '../../categoriesAndItems-facade';

@Component({
  selector: 'app-items-categories',
  templateUrl: './items-categories.component.html',
  styleUrls: ['./items-categories.component.css']
})
export class ItemsCategoriesComponent implements OnInit {

  constructor(private categoriesAndItemsFacade:CategoriesAndItemsFacade) {}
  @Output() onItemClicked = new EventEmitter<{product_name:string,product_price:number,product_id:string}>();

  ngOnInit() {
    this.categoriesAndItemsFacade.loadCategories();
    this.categoriesAndItemsFacade.loadProducts();
  }

  itemClicked(item){
    this.onItemClicked.emit(item);
  }

}
