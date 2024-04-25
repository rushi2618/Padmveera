import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsubledgerComponent } from './accountsubledger.component';

describe('AccountsubledgerComponent', () => {
  let component: AccountsubledgerComponent;
  let fixture: ComponentFixture<AccountsubledgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsubledgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsubledgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
