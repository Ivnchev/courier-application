import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/services/storage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator, genderValidator, imageValidator, rePassCheckFn } from 'src/app/auth/validators';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  hide = true
  hideRepeat = true
  f: FormGroup

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) {
    const passwordCheck = this.fb.control('', [Validators.required, Validators.minLength(4)])
    this.f = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, emailValidator]],
      oldPassword: passwordCheck,
      newPassword: ['', [Validators.required, Validators.minLength(4), rePassCheckFn(passwordCheck)]],
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

  }


}
