import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { constants } from '../constants';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

interface ICount {
  counter: number
}

@Injectable({
  providedIn: 'root'
})
export class EntryCountService {

  private _count: BehaviorSubject<ICount | null> = new BehaviorSubject(undefined)
  count$ = this._count.asObservable()

  constructor(private http: HttpClient) { }

  post(): Observable<any> {
    return this.http.post(constants.baseUrl + 'counter', {}, { withCredentials: true })
  }

  get(): Observable<any> {
    return this.http.get(constants.baseUrl + 'counter', { withCredentials: true })
      .pipe(tap((u: ICount) => this._count.next(u)))
  }

}
