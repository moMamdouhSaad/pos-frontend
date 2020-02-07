import { TestBed } from '@angular/core/testing';

import { CategoriesAndItemsStateService } from './categories-and-items-state.service';

describe('CategoriesAndItemsStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriesAndItemsStateService = TestBed.get(CategoriesAndItemsStateService);
    expect(service).toBeTruthy();
  });
});
