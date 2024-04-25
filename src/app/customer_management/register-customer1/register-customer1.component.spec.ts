import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCustomer1Component } from './register-customer1.component';

describe('RegisterCustomer1Component', () => {
  let component: RegisterCustomer1Component;
  let fixture: ComponentFixture<RegisterCustomer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCustomer1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterCustomer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
