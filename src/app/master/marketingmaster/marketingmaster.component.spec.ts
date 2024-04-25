import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingmasterComponent } from './marketingmaster.component';

describe('MarketingmasterComponent', () => {
  let component: MarketingmasterComponent;
  let fixture: ComponentFixture<MarketingmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingmasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
