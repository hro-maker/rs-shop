import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BySubCategoryIdComponent } from './by-sub-category-id.component';

describe('BySubCategoryIdComponent', () => {
  let component: BySubCategoryIdComponent;
  let fixture: ComponentFixture<BySubCategoryIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BySubCategoryIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BySubCategoryIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
