import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriesResponse } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})

export class CategoriesAndItemsApiService {

  readonly categoryAPI = 'http://localhost:5000/api/category/';
  readonly productAPI = 'http://localhost:5000/api/product/';

  constructor(private http :HttpClient) { }

  getAllCategories():Observable<CategoriesResponse>{   // TODO : make an interface to categories 
    return this.http.get<CategoriesResponse>(this.categoryAPI)
  }


}


/*
 this.posts = this.user
  .map(user => user.id)
  .switchMap(id => 
  this.postsService.getPosts(id)
*/