import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditShipmentComponent } from './create-edit-shipment.component';

describe('CreateEditShipmentComponent', () => {
  let component: CreateEditShipmentComponent;
  let fixture: ComponentFixture<CreateEditShipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditShipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
