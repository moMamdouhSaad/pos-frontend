import { TestBed } from '@angular/core/testing';

import { BillStateService } from './bill-state.service';

describe('BillStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BillStateService = TestBed.get(BillStateService);
    expect(service).toBeTruthy();
  });
});
