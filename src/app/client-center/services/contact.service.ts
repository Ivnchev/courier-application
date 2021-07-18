import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { constants } from 'src/app/shared/constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getSupportQuestions(): Observable<any> {
    return this.http.get(constants.baseUrl + 'support', { withCredentials: true })
  }

  getSupportQuestion(id: string): Observable<any> {
    return this.http.get(constants.baseUrl + 'support/' + id, { withCredentials: true })
  }

  postSupportQuestion(data: object): Observable<any> {
    return this.http.post(constants.baseUrl + 'support', data, { withCredentials: true })
  }

  editSupportQuestion(id: string, data: object): Observable<any> {
    return this.http.put(constants.baseUrl + 'support/' + id, data, { withCredentials: true })
  }

  deleteSupportQuestion(id: string): Observable<any> {
    return this.http.delete(constants.baseUrl + 'support/' + id, { withCredentials: true })
  }
}
