import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/core/services/store.service';
import { imageValidator } from 'src/app/auth/validators';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  isLoading: boolean = false
  hasError: boolean
  f: FormGroup

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private storeService: StoreService,
    private alertService: AlertService
  ) {
    this.f = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      imageUrl: ['', [Validators.required, imageValidator]],
      description: ['', [Validators.required, Validators.minLength(20)]],
    })
    this.hasError = false
  }

  ngOnInit(): void { }


  newsHandler(formData: object): void {
    this.isLoading = true
    this.storeService.postNews(formData).subscribe({
      next: data => {
        this.isLoading = false
        this.router.navigateByUrl('/')
      },
      error: err => {
        this.hasError = true
        this.isLoading = false
        this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
      }
    })

  }



}
