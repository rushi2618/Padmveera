import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitedCustomerComponent } from './visited-customer.component';

describe('VisitedCustomerComponent', () => {
  let component: VisitedCustomerComponent;
  let fixture: ComponentFixture<VisitedCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitedCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitedCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
