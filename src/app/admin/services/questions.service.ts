import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { constants } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<any> {
    return this.http.get(constants.baseUrl + 'question-and-answers', { withCredentials: true })
  }

  postQuestions(data: object): Observable<any> {
    return this.http.post(constants.baseUrl + 'question-and-answers', data, { withCredentials: true })
  }

  deleteQuestion(id: string): Observable<any> {
    return this.http.delete(constants.baseUrl + 'question-and-answers/' + id, { withCredentials: true })
  }
}
