import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input("products") products$:Observable<Item[]>;  
  @Output() onItemClicked = new EventEmitter<{product_name:string,product_price:number}>();
  constructor() { }

  ngOnInit() {
  }
  itemClicked(item:Item){
    const newItemObj = {product_name:item.product_name,product_price:item.product_price,product_id:item._id} ; //remove unneccasry properties such as category_id and product_id
    this.onItemClicked.emit(newItemObj)
  }

}
