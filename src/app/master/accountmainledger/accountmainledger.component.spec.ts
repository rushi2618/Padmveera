import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountmainledgerComponent } from './accountmainledger.component';

describe('AccountmainledgerComponent', () => {
  let component: AccountmainledgerComponent;
  let fixture: ComponentFixture<AccountmainledgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountmainledgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountmainledgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
