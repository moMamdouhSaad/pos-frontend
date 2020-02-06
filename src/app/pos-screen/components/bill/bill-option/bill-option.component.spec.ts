import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillOptionComponent } from './bill-option.component';

describe('BillOptionComponent', () => {
  let component: BillOptionComponent;
  let fixture: ComponentFixture<BillOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
