import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillFooterComponent } from './bill-footer.component';

describe('BillFooterComponent', () => {
  let component: BillFooterComponent;
  let fixture: ComponentFixture<BillFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
