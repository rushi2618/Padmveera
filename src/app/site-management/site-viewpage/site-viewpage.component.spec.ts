import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteViewpageComponent } from './site-viewpage.component';

describe('SiteViewpageComponent', () => {
  let component: SiteViewpageComponent;
  let fixture: ComponentFixture<SiteViewpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteViewpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteViewpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
