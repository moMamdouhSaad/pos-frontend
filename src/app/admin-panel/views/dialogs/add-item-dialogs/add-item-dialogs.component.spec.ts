import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemDialogsComponent } from './add-item-dialogs.component';

describe('AddItemDialogsComponent', () => {
  let component: AddItemDialogsComponent;
  let fixture: ComponentFixture<AddItemDialogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemDialogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
