import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/core/services/store.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { shipmentTypeValidator, shipmentSize, shipmentWeight } from 'src/app/shared/common-validators';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-create-shipment',
  templateUrl: './create-edit-shipment.component.html',
  styleUrls: ['./create-edit-shipment.component.css']
})
export class CreateEditShipmentComponent implements OnInit {

  f: FormGroup
  id: string
  isCreateMode: boolean
  isAdmin$ = this.authService.isAdmin$

  constructor(
    private storeService: StoreService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.isCreateMode = !this.id

    this.f = this.fb.group({
      address: ['', [Validators.required, Validators.minLength(10)]],
      size: ['', [Validators.required, shipmentSize]],
      weight: ['', [Validators.required, Validators.min(2), shipmentWeight]],
      shipmentType: ['', [Validators.required, shipmentTypeValidator]]
    })

    if (!this.isCreateMode) {
      this.storeService.getShipment(this.id)
        .pipe(first())
        .subscribe(x => this.f.patchValue(x))
    }

  }

  shipmentHandler(formData: object): void {

    if (this.f.invalid) {
      return
    }
    if (this.isCreateMode) {
      this.createShipment(formData)
    } else {
      this.editShipment(formData)
    }

  }

  private createShipment(formData) {
    this.storeService.postShipment(formData).subscribe(data => {
      this.router.navigateByUrl('/shipments')
    })
  }

  private editShipment(formData) {
    this.storeService.editShipment(this.id, formData).subscribe(data => {
      this.router.navigateByUrl('/shipments')
    })
  }



}
