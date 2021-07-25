import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(
    private http: HttpClient
  ) { }


  getLocation(lat: string, long: string): Observable<any> {
    return this.http.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`)
  }

}
