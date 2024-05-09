import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementReportComponent } from './advertisement-report.component';

describe('AdvertisementReportComponent', () => {
  let component: AdvertisementReportComponent;
  let fixture: ComponentFixture<AdvertisementReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisementReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertisementReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
