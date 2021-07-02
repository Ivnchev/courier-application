import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces';
import { constants } from 'src/app/shared/constants';
import { StorageService } from './storage.service';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: BehaviorSubject<IUser | null> = new BehaviorSubject(undefined)
  user$ = this._user.asObservable()
  isAdmin$ = this.user$.pipe(map(u => u?.role === 'admin'))

  constructor(private http: HttpClient, private store: StorageService) { }

  getUser(): Observable<any> {
    const {_id, token} = this.store.getItem('auth')
    const headers = new HttpHeaders({ [constants.authHeaderName]: token })
    return this.http.get(constants.baseUrl + 'users/' + _id, { headers, withCredentials: true })
      .pipe(tap((u: IUser) => this._user.next(u)),)
  }

}
