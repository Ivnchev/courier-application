import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('form', {static: false}) form: NgForm;

  f: FormGroup
  hide: boolean = true
  hasError: boolean
  isLoading: boolean = false

  constructor(
    private authService: AuthService,
    private router: Router,
    private storage: StorageService,
    private fb: FormBuilder,
    private alertService: AlertService
  ) {
    this.f = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    })
    this.hasError = false
  }

  ngOnInit(): void { }

  loginHandler(formData): void {
    this.isLoading = true
    this.authService.login(formData).subscribe({
      next: (data) => {
        this.isLoading = false
        this.storage.setItem('auth', data)
        this.form.resetForm()
        this.router.navigateByUrl('/')
      },
      error: (err) => {
        this.isLoading = false
        this.hasError = true
        this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
      }
    })

  }


}
