import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { constants } from 'src/app/shared/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupportQuestionsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(constants.baseUrl + 'support', { withCredentials: true })
  }

  getOne(id: string): Observable<any> {
    return this.http.get(constants.baseUrl + 'support/' + id, { withCredentials: true })
  }

  postOne(data: object): Observable<any> {
    return this.http.post(constants.baseUrl + 'support', data, { withCredentials: true })
  }

  updateOne(id: string, data: object): Observable<any> {
    return this.http.put(constants.baseUrl + 'support/' + id, data, { withCredentials: true })
  }

  deleteOne(id: string): Observable<any> {
    return this.http.delete(constants.baseUrl + 'support/' + id, { withCredentials: true })
  }
}
