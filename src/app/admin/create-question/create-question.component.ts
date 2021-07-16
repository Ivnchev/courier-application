import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {
  isLoading: boolean = false
  f: FormGroup
  hasError: boolean

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private questionService: QuestionsService,
    private alertService: AlertService
  ) {
    this.f = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
    })
    this.hasError = false
  }

  ngOnInit(): void {
  }

  questionHandler(formData: object): void {
    this.isLoading = true
    this.questionService.postQuestions(formData).subscribe({
      next: data => {
        this.isLoading = false
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
