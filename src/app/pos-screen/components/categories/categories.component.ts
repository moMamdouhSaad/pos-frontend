import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Input("categories") categories$:Observable<Category[]>;
  constructor() { }

  ngOnInit() { }

}
