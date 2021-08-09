import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupportQuestionsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('support')
  }

  getOne(id: string): Observable<any> {
    return this.http.get('support/' + id)
  }

  postOne(data: object): Observable<any> {
    return this.http.post('support', data)
  }

  updateOne(id: string, data: object): Observable<any> {
    return this.http.put('support/' + id, data)
  }

  deleteOne(id: string): Observable<any> {
    return this.http.delete('support/' + id)
  }
}
