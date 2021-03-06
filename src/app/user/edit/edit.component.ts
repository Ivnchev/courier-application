import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { emailValidator, genderValidator, imageValidator } from 'src/app/auth/validators';
import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @ViewChild('form', { static: false }) form: NgForm;
  @Output() isEditProfile: EventEmitter<any> = new EventEmitter()

  isLoading: boolean = false
  hide: boolean = true
  hideRepeat: boolean = true
  hasError: boolean
  f: FormGroup

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
    private alertService: AlertService
  ) {
    this.f = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, emailValidator]],
      oldPassword: ['', [Validators.required, Validators.minLength(4)]],
      newPassword: ['', [Validators.required, Validators.minLength(4)]],
      gender: ['', [Validators.required, genderValidator]],
      image: ['', [Validators.required, imageValidator]]
    })
    this.hasError = false
    this.userService.getUser()
      .pipe(first())
      .subscribe(x => this.f.patchValue(x), err => {
        this.hasError = true
        this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
      })
  }

  ngOnInit(): void {
  }

  submitHandler(formData: object): void {
    this.isLoading = true
    this.userService.edit(formData).subscribe({
      next: (data) => {
        this.hasError = true
        this.isLoading = false
        this.form.resetForm()
        this.f.disable()
        setTimeout(() => {
          this.f.enable()
          this.userService.getUser()
            .pipe(first())
            .subscribe(x => this.f.patchValue(x), err => {
              this.hasError = true
              this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
            })
        }, 4000);
        this.isEditProfile.emit(true)
        this.alertService.create({ type: 'info', message: 'Successful updated!', time: 3000 })
      },
      error: (err) => {
        this.hasError = true
        this.isLoading = false
        this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
      }
    })
  }


}
