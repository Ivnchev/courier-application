import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { QuestionsService } from '../services/questions.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {
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
    private questionService: QuestionsService,
    private alertService: AlertService
  ) {
    this.id = this.route.snapshot.params['id']
    this.isCreateMode = !this.id

    this.f = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
    })
    this.hasError = false
    if (!this.isCreateMode) {
      this.questionService.getQuestion(this.id)
        .pipe(first())
        .subscribe(x => this.f.patchValue(x), err => {
          this.hasError = true
          this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
        })
    }
  }

  ngOnInit(): void {
  }

  questionHandler(formData: object): void {
    if (this.f.invalid) {
      return
    }
    this.isLoading = true
    if (this.isCreateMode) {
      this.createQuestion(formData)
    } else {
      this.editQuestion(formData)
    }

    
  }

  private createQuestion(formData) {
    this.questionService.postQuestion(formData).subscribe({
      next: data => {
        this.isLoading = false
        this.form.resetForm()
        this.router.navigateByUrl('/client-center/q&a')
      },
      error: err => {
        this.hasError = true
        this.isLoading = false
        this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
      }
    })
  }

  private editQuestion(formData) {
    this.questionService.updateQuestion(this.id, formData).subscribe({
      next: data => {
        this.isLoading = false
        this.form.resetForm()
        this.router.navigateByUrl('/client-center/q&a')
      },
      error: err => {
        this.hasError = true
        this.isLoading = false
        this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
      }
    })
  }

}
