import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserDialogsComponent } from './add-user-dialogs.component';

describe('AddUserDialogsComponent', () => {
  let component: AddUserDialogsComponent;
  let fixture: ComponentFixture<AddUserDialogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserDialogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
