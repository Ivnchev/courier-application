import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getSupportQuestions(): Observable<any> {
    return this.http.get('support')
  }

  getSupportQuestion(id: string): Observable<any> {
    return this.http.get('support/' + id)
  }

  postSupportQuestion(data: object): Observable<any> {
    return this.http.post('support', data)
  }

  editSupportQuestion(id: string, data: object): Observable<any> {
    return this.http.put('support/' + id, data)
  }

  deleteSupportQuestion(id: string): Observable<any> {
    return this.http.delete('support/' + id)
  }
}
