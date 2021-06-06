import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IQuestion } from 'src/app/shared/interfaces';
import { tap } from "rxjs/operators";
@Component({
  selector: 'app-questions-and-answers',
  templateUrl: './questions-and-answers.component.html',
  styleUrls: ['./questions-and-answers.component.css']
})
export class QuestionsAndAnswersComponent implements OnInit {

  searchValue: string
  questions: IQuestion[]

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<IQuestion[]>('../assets/demo-data/question-data.json')
      .pipe( tap((question: IQuestion[]) => question.map(x => x.showDetails = false)))
      .subscribe((result: IQuestion[]) => {
        this.questions = result
      })
      
  }


  toogleInfo(question): void {
    question.showDetails = !question.showDetails
  }

}
