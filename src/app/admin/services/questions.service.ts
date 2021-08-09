import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<any> {
    return this.http.get('question-and-answers')
  }

  getQuestion(id: string): Observable<any> {
    return this.http.get('question-and-answers/' + id)
  }

  postQuestion(data: object): Observable<any> {
    return this.http.post('question-and-answers', data)
  }

  updateQuestion(id: string, data: object): Observable<any> {
    return this.http.put('question-and-answers/' + id, data)
  }

  deleteQuestion(id: string): Observable<any> {
    return this.http.delete('question-and-answers/' + id)
  }
}
