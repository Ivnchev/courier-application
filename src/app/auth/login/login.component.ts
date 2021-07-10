import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  f: FormGroup
  hide = true
  isLoading = false

  constructor(
    private authService: AuthService,
    private router: Router,
    private storage: StorageService,
    private fb: FormBuilder
  ) {
    this.f = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    })
  }

  ngOnInit(): void {}

  loginHandler(formData): void {
    this.isLoading = true
    this.authService.login(formData).subscribe({
      next: (data) => {
        this.isLoading = false
        this.storage.setItem('auth', data)
        this.router.navigateByUrl('/')
      },
      error: (err) => {
        window.alert(err.error)
        this.isLoading = false
      }
    })

  }


}
