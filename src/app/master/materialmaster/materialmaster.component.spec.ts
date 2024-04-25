import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialmasterComponent } from './materialmaster.component';

describe('MaterialmasterComponent', () => {
  let component: MaterialmasterComponent;
  let fixture: ComponentFixture<MaterialmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialmasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
