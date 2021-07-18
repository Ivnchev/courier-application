import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ClaimService } from '../services/claim.service';

@Component({
  selector: 'app-register-claim',
  templateUrl: './register-claim.component.html',
  styleUrls: ['./register-claim.component.css']
})
export class RegisterClaimComponent implements OnInit {
  @ViewChild('form', {static: false}) form: NgForm;
  f: FormGroup
  id: string
  isCreateMode: boolean
  isLoading: boolean = false
  hasError: boolean
  constructor(
    private claimService: ClaimService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.isCreateMode = !this.id
    this.f = this.fb.group({
      trackingNumber: ['', [Validators.required, Validators.minLength(24)]],
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
    })

    if (!this.isCreateMode) {
      this.claimService.getClaim(this.id)
        .pipe(first())
        .subscribe(x => this.f.patchValue(x))
    }
    this.hasError = false
  }

  claimHandler(formData: object): void {
    if (this.f.invalid) { return }
    this.isLoading = true
    if (this.isCreateMode) {
      this.createClaim(formData)
    } else {
      this.editClaim(formData)
    }

  }

  private createClaim(formData) {
    this.claimService.postClaim(formData).subscribe({
      next: data => {
        this.isLoading = false
        this.form.resetForm()
        this.router.navigateByUrl('/client-center/claims')
      },
      error: err => {
        this.hasError = true
        this.isLoading = false
        this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
      }
    })
  }

  private editClaim(formData) {
    this.claimService.editClaim(this.id, formData).subscribe({
      next: data => {
        this.isLoading = false
        this.form.resetForm()
        this.router.navigateByUrl('/client-center/claims')
      },
      error: err => {
        this.hasError = true
        this.isLoading = false
        this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
      }
    })
  }

}
