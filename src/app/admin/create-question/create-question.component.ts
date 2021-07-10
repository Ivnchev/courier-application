import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {
  isLoading: boolean = false
  f: FormGroup

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private storeService: StoreService
  ) {
    this.f = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
    })
  }

  ngOnInit(): void {
  }

  questionHandler(formData: object): void {
    this.isLoading = true
    this.storeService.postQuestions(formData).subscribe({
      next: data => {
      this.isLoading = false
      this.router.navigateByUrl('/client-center/q&a')
      }
    })
  }

}
