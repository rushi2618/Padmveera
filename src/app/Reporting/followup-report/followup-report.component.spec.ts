import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowupReportComponent } from './followup-report.component';

describe('FollowupReportComponent', () => {
  let component: FollowupReportComponent;
  let fixture: ComponentFixture<FollowupReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowupReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowupReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
