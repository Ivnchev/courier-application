import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { constants } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get(constants.baseUrl + 'news')
  }

  postNews(data: object): Observable<any> {
    return this.http.post(constants.baseUrl + 'news', data, { withCredentials: true })
  }

  getQuestions(): Observable<any> {
    return this.http.get(constants.baseUrl + 'question-and-answers')
  }

  postQuestions(data: object): Observable<any> {
    return this.http.post(constants.baseUrl + 'question-and-answers', data, { withCredentials: true })
  }

  getShipments(): Observable<any> {
    return this.http.get(constants.baseUrl + 'news')
  }

  postShipment(data: object): Observable<any> {
    return this.http.post(constants.baseUrl + 'news', data, { withCredentials: true })
  }

}
