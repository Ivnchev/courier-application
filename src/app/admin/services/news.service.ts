import { Injectable } from '@angular/core';
import { constants } from 'src/app/shared/constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get(constants.baseUrl + 'news', { withCredentials: true })
  }

  postNews(data: object): Observable<any> {
    return this.http.post(constants.baseUrl + 'news', data, { withCredentials: true })
  }
}
