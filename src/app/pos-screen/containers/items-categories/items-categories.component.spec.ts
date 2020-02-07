import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsCategoriesComponent } from './items-categories.component';

describe('ItemsCategoriesComponent', () => {
  let component: ItemsCategoriesComponent;
  let fixture: ComponentFixture<ItemsCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
