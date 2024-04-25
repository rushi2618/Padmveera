import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialRequisitionformComponent } from './material-requisitionform.component';

describe('MaterialRequisitionformComponent', () => {
  let component: MaterialRequisitionformComponent;
  let fixture: ComponentFixture<MaterialRequisitionformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialRequisitionformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialRequisitionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
