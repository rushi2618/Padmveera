import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredCustomerComponent } from './registered-customer.component';

describe('RegisteredCustomerComponent', () => {
  let component: RegisteredCustomerComponent;
  let fixture: ComponentFixture<RegisteredCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteredCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
