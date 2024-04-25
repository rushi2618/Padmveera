import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialRequisitionlistComponent } from './material-requisitionlist.component';

describe('MaterialRequisitionlistComponent', () => {
  let component: MaterialRequisitionlistComponent;
  let fixture: ComponentFixture<MaterialRequisitionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialRequisitionlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialRequisitionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
