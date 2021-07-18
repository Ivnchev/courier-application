import { Injectable } from '@angular/core';
import { constants } from 'src/app/shared/constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(constants.baseUrl + 'news', { withCredentials: true })
  }

  getOne(id: string): Observable<any> {
    return this.http.get(constants.baseUrl + 'news/' + id, { withCredentials: true })
  }

  postOne(data: object): Observable<any> {
    return this.http.post(constants.baseUrl + 'news', data, { withCredentials: true })
  }

  updateOne(id: string, data: object): Observable<any> {
    return this.http.put(constants.baseUrl + 'news/' + id, data, { withCredentials: true })
  }

  deleteOne(id: string): Observable<any> {
    return this.http.delete(constants.baseUrl + 'news/' + id, { withCredentials: true })
  }
}
