import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmediaReportComponent } from './socialmedia-report.component';

describe('SocialmediaReportComponent', () => {
  let component: SocialmediaReportComponent;
  let fixture: ComponentFixture<SocialmediaReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialmediaReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialmediaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
