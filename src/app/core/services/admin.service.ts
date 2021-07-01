import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { constants } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get(constants.baseUrl + 'news')
  }

  postNews(data: object): Observable<any> {
    return this.http.post(constants.baseUrl + 'news', data, { withCredentials: true })
  }
}
