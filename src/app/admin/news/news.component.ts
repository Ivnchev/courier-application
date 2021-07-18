import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { imageValidator } from 'src/app/auth/validators';
import { AlertService } from 'src/app/shared/services/alert.service';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @ViewChild('form', {static: false}) form: NgForm;

  f: FormGroup
  hasError: boolean
  isLoading: boolean = false

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private newsService: NewsService,
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
    this.newsService.postNews(formData).subscribe({
      next: data => {
        this.isLoading = false
        this.form.resetForm()
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
