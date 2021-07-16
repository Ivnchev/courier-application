import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { constants } from 'src/app/shared/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private http: HttpClient) { }

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
