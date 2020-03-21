import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemDialogsComponent } from './edit-item-dialogs.component';

describe('EditItemDialogsComponent', () => {
  let component: EditItemDialogsComponent;
  let fixture: ComponentFixture<EditItemDialogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditItemDialogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
