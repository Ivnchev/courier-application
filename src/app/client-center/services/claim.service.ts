import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private http: HttpClient) { }

  getClaims(): Observable<any> {
    return this.http.get('claims')
  }

  getClaim(id: string): Observable<any> {
    return this.http.get('claims/' + id)
  }

  postClaim(data: object): Observable<any> {
    return this.http.post('claims', data)
  }

  editClaim(id: string, data: object): Observable<any> {
    return this.http.put('claims/' + id, data)
  }

  deleteClaim(id: string): Observable<any> {
    return this.http.delete('claims/' + id)
  }
}
