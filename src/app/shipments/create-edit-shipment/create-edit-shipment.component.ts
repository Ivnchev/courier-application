import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { shipmentTypeValidator, shipmentSize, shipmentWeight } from 'src/app/shared/common-validators';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ShipmentService } from '../services/shipment.service';

@Component({
  selector: 'app-create-shipment',
  templateUrl: './create-edit-shipment.component.html',
  styleUrls: ['./create-edit-shipment.component.css']
})
export class CreateEditShipmentComponent implements OnInit {
  @ViewChild('form', {static: false}) form: NgForm;
  f: FormGroup
  id: string
  isCreateMode: boolean
  hasError: boolean
  isLoading: boolean = false
  isAdmin$ = this.authService.isAdmin$


  constructor(
    private shipmentService: ShipmentService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.isCreateMode = !this.id

    this.f = this.fb.group({
      address: ['', [Validators.required, Validators.minLength(10)]],
      size: ['', [Validators.required, shipmentSize]],
      weight: ['', [Validators.required, Validators.min(2), shipmentWeight]],
      shipmentType: ['', [Validators.required, shipmentTypeValidator]],
      status: [undefined]
    })
    this.hasError = false
    if (!this.isCreateMode) {
      this.shipmentService.getShipment(this.id)
        .pipe(first())
        .subscribe(x => this.f.patchValue(x), err => {
          this.hasError = true
          this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
        })
    }

  }

  shipmentHandler(formData: object): void {

    if (this.f.invalid) {
      return
    }
    this.isLoading = true
    if (this.isCreateMode) {
      this.createShipment(formData)
    } else {
      this.editShipment(formData)
    }

  }

  private createShipment(formData) {
    this.shipmentService.postShipment(formData).subscribe({
      next: data => {
        this.isLoading = false
        this.form.resetForm()
        this.router.navigateByUrl('/shipments')
      },
      error: err => {
        this.hasError = true
        this.isLoading = false
        this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
      }
    })
  }

  private editShipment(formData) {
    this.shipmentService.editShipment(this.id, formData).subscribe({
      next: data => {
        this.isLoading = false
        this.router.navigateByUrl('/shipments')
      },
      error: err => {
        this.hasError = true
        this.isLoading = false
        this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
      }
    })
  }



}
