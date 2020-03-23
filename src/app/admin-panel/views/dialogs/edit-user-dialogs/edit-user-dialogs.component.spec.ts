import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserDialogsComponent } from './edit-user-dialogs.component';

describe('EditUserDialogsComponent', () => {
  let component: EditUserDialogsComponent;
  let fixture: ComponentFixture<EditUserDialogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserDialogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
