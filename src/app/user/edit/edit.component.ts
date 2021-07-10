import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator, genderValidator, imageValidator } from 'src/app/auth/validators';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  isLoading = false
  hide = true
  hideRepeat = true
  f: FormGroup

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.f = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, emailValidator]],
      oldPassword: ['', [Validators.required, Validators.minLength(4)]],
      newPassword: ['', [Validators.required, Validators.minLength(4)]],
      gender: ['', [Validators.required, genderValidator]],
      image: ['', [Validators.required, imageValidator]]
    })

    this.userService.getUser()
        .pipe(first())
        .subscribe(x => this.f.patchValue(x))
  }

  ngOnInit(): void {
  }

  submitHandler(formData: object): void {
    this.isLoading = true
    this.userService.edit(formData).subscribe({
      next: (data) => {
        this.isLoading = false
        this.router.navigateByUrl('/user/profile')
      },
      error: (err) => {
        window.alert(err.error)
        this.isLoading = false
      }
    })
  }


}
