import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagetypemasterComponent } from './stagetypemaster.component';

describe('StagetypemasterComponent', () => {
  let component: StagetypemasterComponent;
  let fixture: ComponentFixture<StagetypemasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StagetypemasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StagetypemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
