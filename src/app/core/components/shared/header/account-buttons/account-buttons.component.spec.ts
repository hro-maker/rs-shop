import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountButtonsComponent } from './account-buttons.component';

describe('AccountButtonsComponent', () => {
  let component: AccountButtonsComponent;
  let fixture: ComponentFixture<AccountButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
