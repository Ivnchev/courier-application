import { Component, OnInit } from '@angular/core';
import { IQuestion } from 'src/app/shared/interfaces';
import { StoreService } from 'src/app/core/services/store.service';
@Component({
  selector: 'app-questions-and-answers',
  templateUrl: './questions-and-answers.component.html',
  styleUrls: ['./questions-and-answers.component.css']
})
export class QuestionsAndAnswersComponent implements OnInit {

  searchValue: string
  questions: IQuestion[]

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {

    this.storeService.getQuestions().subscribe({
      next: (data: IQuestion[]) => {
        this.questions = data
      }
    })

  }


  toogleInfo(question): void {
    question.showDetails = !question.showDetails
  }

}
