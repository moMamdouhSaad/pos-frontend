import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriesResponse } from 'src/app/models/category';
import { ItemsResponse } from 'src/app/models/item';

@Injectable({
  providedIn: 'root'
})

export class CategoriesAndItemsApiService {

  readonly categoryAPI = 'http://localhost:5000/api/category/';
  readonly productAPI = 'http://localhost:5000/api/product/';

  constructor(private http :HttpClient) { }

  getAllCategories():Observable<CategoriesResponse>{   
    return this.http.get<CategoriesResponse>(this.categoryAPI)
  }

  getAllProducts():Observable<ItemsResponse>{
    return this.http.get<ItemsResponse>(this.productAPI)
  }


}


/*
 this.posts = this.user
  .map(user => user.id)
  .switchMap(id => 
  this.postsService.getPosts(id)
*/