import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCategoryIdComponent } from './by-category-id.component';

describe('ByCategoryIdComponent', () => {
  let component: ByCategoryIdComponent;
  let fixture: ComponentFixture<ByCategoryIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByCategoryIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByCategoryIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
