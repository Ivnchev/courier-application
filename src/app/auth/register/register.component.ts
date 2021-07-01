import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailValidator, rePassCheckFn, genderValidator, imageValidator } from '../validators';
import { StorageService } from 'src/app/core/services/storage.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  f: FormGroup

  hide = true
  hideRepeat = true

  constructor(
    private authService: AuthService,
    private router: Router,
    private storage: StorageService,
    private fb: FormBuilder
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
  }

  ngOnInit(): void {
  }

  registerHandler(formData) {
    console.log(formData);
    this.authService.register(formData).subscribe({
      next: (data) => {
        const { token, user } = data
        // this.authService.isLogged()
        this.storage.setItem('auth', data)
        this.router.navigateByUrl('/')
      },
      error: (err) => {
        window.alert(err.message)
      }
    })
  }

}
