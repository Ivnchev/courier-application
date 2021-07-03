import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/core/services/store.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { shipmentTypeValidator, shipmentSize, shipmentWeight } from 'src/app/shared/common-validators';

@Component({
  selector: 'app-create-shipment',
  templateUrl: './create-shipment.component.html',
  styleUrls: ['./create-shipment.component.css']
})
export class CreateShipmentComponent implements OnInit {

  f: FormGroup

  constructor(
    private storeService: StoreService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.f = this.fb.group({
      address: ['', [Validators.required, Validators.minLength(10)]],
      size: ['', [Validators.required, shipmentSize]],
      weight: ['', [Validators.required, Validators.minLength(2), shipmentWeight]],
      shipmentType: ['', [Validators.required, shipmentTypeValidator]],
    })
  }

  ngOnInit(): void {

  }

  shipmentHandler(formData: object): void {
    this.storeService.postShipment(formData).subscribe(data => {
      this.router.navigateByUrl('/shipments/my-shipments')
    })
  }

}
