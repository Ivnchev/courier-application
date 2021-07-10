import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StoreService } from 'src/app/core/services/store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register-claim',
  templateUrl: './register-claim.component.html',
  styleUrls: ['./register-claim.component.css']
})
export class RegisterClaimComponent implements OnInit {

  f: FormGroup
  id: string
  isCreateMode: boolean
  isLoading: boolean = false

  constructor(
    private storeService: StoreService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
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
      this.storeService.getClaim(this.id)
        .pipe(first())
        .subscribe(x => this.f.patchValue(x))
    }

  }

  claimHandler(formData: object): void {
    if (this.f.invalid) { return }

    if (this.isCreateMode) {
      this.createClaim(formData)
    } else {
      this.editClaim(formData)
    }

  }

  private createClaim(formData) {
    this.isLoading = true
    this.storeService.postClaim(formData).subscribe({
      next: data => {
        this.isLoading = false
        this.router.navigateByUrl('/client-center/claims')
      }
    })
  }

  private editClaim(formData) {
    this.isLoading = true
    this.storeService.editClaim(this.id, formData).subscribe({
      next: data => {
        this.isLoading = false
        this.router.navigateByUrl('/client-center/claims')
      }
    })
  }

}
