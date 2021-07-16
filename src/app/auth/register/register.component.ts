import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailValidator, rePassCheckFn, genderValidator, imageValidator } from '../validators';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  f: FormGroup

  isLoading: boolean = false
  hide: boolean = true
  hideRepeat: boolean = true
  hasError: boolean

  constructor(
    private authService: AuthService,
    private router: Router,
    private storage: StorageService,
    private fb: FormBuilder,
    private alertService: AlertService
  ) {
    const passwordCheck = this.fb.control('', [Validators.required, Validators.minLength(4)])
    this.f = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, emailValidator]],
      password: passwordCheck,
      rePassword: ['', [Validators.required, Validators.minLength(4), rePassCheckFn(passwordCheck)]],
      gender: ['', [Validators.required, genderValidator]],
      image: ['', [Validators.required, imageValidator]]
    })
    this.hasError = false
  }

  ngOnInit(): void {
  }

  registerHandler(formData) {
    this.isLoading = true
    this.authService.register(formData).subscribe({
      next: (data) => {
        this.isLoading = false
        this.storage.setItem('auth', data)
        this.router.navigateByUrl('/')
      },
      error: (err) => {
        this.hasError = true
        this.isLoading = false
        this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
      }
    })
  }

}
