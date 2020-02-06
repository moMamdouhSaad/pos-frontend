import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillBodyItemComponent } from './bill-body-item.component';

describe('BillBodyItemComponent', () => {
  let component: BillBodyItemComponent;
  let fixture: ComponentFixture<BillBodyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillBodyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillBodyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
