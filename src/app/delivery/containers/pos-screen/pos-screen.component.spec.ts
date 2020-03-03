import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosScreenComponent } from './pos-screen.component';

describe('PosScreenComponent', () => {
  let component: PosScreenComponent;
  let fixture: ComponentFixture<PosScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
