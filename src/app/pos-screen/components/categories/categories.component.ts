import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { Category } from 'src/app/models/category';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Input("categories") categories$:Observable<Category[]>;
  @Input("selectedCategory") selectedCategory$:Observable<string>;
  @Output() onCategoryClicked = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
   
   }

  categoryClicked(categoryID:string){
    this.onCategoryClicked.emit(categoryID)
  }


}
