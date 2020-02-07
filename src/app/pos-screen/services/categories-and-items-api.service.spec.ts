import { TestBed } from '@angular/core/testing';

import { CategoriesAndItemsApiService } from './categories-and-items-api.service';

describe('CategoriesAndItemsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriesAndItemsApiService = TestBed.get(CategoriesAndItemsApiService);
    expect(service).toBeTruthy();
  });
});
