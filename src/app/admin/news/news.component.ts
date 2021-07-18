import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { imageValidator } from 'src/app/auth/validators';
import { AlertService } from 'src/app/shared/services/alert.service';
import { NewsService } from '../services/news.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @ViewChild('form', {static: false}) form: NgForm;

  f: FormGroup
  id: string
  isCreateMode: boolean
  hasError: boolean
  isLoading: boolean = false

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private newsService: NewsService,
    private alertService: AlertService
  ) {
    this.id = this.route.snapshot.params['id']
    this.isCreateMode = !this.id

    this.f = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      imageUrl: ['', [Validators.required, imageValidator]],
      description: ['', [Validators.required, Validators.minLength(20)]],
    })
    this.hasError = false
    if (!this.isCreateMode) {
      this.newsService.getOne(this.id)
        .pipe(first())
        .subscribe(x => this.f.patchValue(x), err => {
          this.hasError = true
          this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
        })
    }
  }

  ngOnInit(): void { }


  newsHandler(formData: object): void {

    if (this.f.invalid) {
      return
    }
    this.isLoading = true
    if (this.isCreateMode) {
      this.createNews(formData)
    } else {
      this.editNews(formData)
    }
  }

  private createNews(formData) {
    this.newsService.postOne(formData).subscribe({
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

  private editNews(formData) {
    this.newsService.updateOne(this.id, formData).subscribe({
      next: data => {
        this.isLoading = false
        this.router.navigateByUrl('/admin')
      },
      error: err => {
        this.hasError = true
        this.isLoading = false
        this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
      }
    })
  }



}
