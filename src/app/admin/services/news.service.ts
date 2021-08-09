import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('news')
  }

  getOne(id: string): Observable<any> {
    return this.http.get('news/' + id)
  }

  postOne(data: object): Observable<any> {
    return this.http.post('news', data)
  }

  updateOne(id: string, data: object): Observable<any> {
    return this.http.put('news/' + id, data)
  }

  deleteOne(id: string): Observable<any> {
    return this.http.delete('news/' + id)
  }
}
