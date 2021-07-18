import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('form', {static: false}) form: NgForm;
  f: FormGroup
  hasError: boolean
  isLoading: boolean = false
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertService: AlertService,
    private contactService: ContactService
  ) {
    this.f = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      description: ['', [Validators.required, Validators.minLength(10)]],
    })
    this.hasError = false
  }

  ngOnInit(): void {
  }

  submit(formData: object): void {
    this.contactService.postSupportQuestion(formData).subscribe({
      next: data => {
        this.isLoading = false
        this.hasError = true
        this.form.resetForm()
        this.alertService.create({ type: 'info', message: 'Successful send!', time: 3000 })
      },
      error: err => {
        this.hasError = true
        this.isLoading = false
        this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
      }
    })
  }

}
