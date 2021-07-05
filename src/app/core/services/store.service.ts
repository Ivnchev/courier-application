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
    return this.http.get(constants.baseUrl + 'news', { withCredentials: true })
  }

  postNews(data: object): Observable<any> {
    return this.http.post(constants.baseUrl + 'news', data, { withCredentials: true })
  }

  getQuestions(): Observable<any> {
    return this.http.get(constants.baseUrl + 'question-and-answers', { withCredentials: true })
  }

  postQuestions(data: object): Observable<any> {
    return this.http.post(constants.baseUrl + 'question-and-answers', data, { withCredentials: true })
  }

  getShipments(): Observable<any> {
    return this.http.get(constants.baseUrl + 'shipments', { withCredentials: true })
  }

  getShipment(id: string): Observable<any> {
    return this.http.get(constants.baseUrl + 'shipments/' + id, { withCredentials: true })
  }

  postShipment(data: object): Observable<any> {
    return this.http.post(constants.baseUrl + 'shipments', data, { withCredentials: true })
  }

  editShipment(id: string, data: object): Observable<any> {
    return this.http.put(constants.baseUrl + 'shipments/' + id, data, { withCredentials: true })
  }

  deleteShipment(id: string): Observable<any> {
    return this.http.delete(constants.baseUrl + 'shipments/' + id, { withCredentials: true })
  }

  getClaims(): Observable<any> {
    return this.http.get(constants.baseUrl + 'claims', { withCredentials: true })
  }

  getClaim(id: string): Observable<any> {
    return this.http.get(constants.baseUrl + 'claims/' + id, { withCredentials: true })
  }

  postClaim(data: object): Observable<any> {
    return this.http.post(constants.baseUrl + 'claims', data, { withCredentials: true })
  }

  editClaim(id: string, data: object): Observable<any> {
    return this.http.put(constants.baseUrl + 'claims/' + id, data, { withCredentials: true })
  }

  deleteClaim(id: string): Observable<any> {
    return this.http.delete(constants.baseUrl + 'claims/' + id, { withCredentials: true })
  }

}
