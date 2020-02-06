import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillBodyComponent } from './bill-body.component';

describe('BillBodyComponent', () => {
  let component: BillBodyComponent;
  let fixture: ComponentFixture<BillBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
