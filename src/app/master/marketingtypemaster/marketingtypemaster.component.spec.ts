import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingtypemasterComponent } from './marketingtypemaster.component';

describe('MarketingtypemasterComponent', () => {
  let component: MarketingtypemasterComponent;
  let fixture: ComponentFixture<MarketingtypemasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingtypemasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingtypemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
