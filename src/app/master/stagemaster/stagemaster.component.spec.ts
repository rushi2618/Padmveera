import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagemasterComponent } from './stagemaster.component';

describe('StagemasterComponent', () => {
  let component: StagemasterComponent;
  let fixture: ComponentFixture<StagemasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StagemasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StagemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
