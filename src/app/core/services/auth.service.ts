import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces';
import { map, tap, catchError } from 'rxjs/operators';
import { StorageService } from './storage.service';
import { constants } from 'src/app/shared/constants';



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private _currentUser: BehaviorSubject<IUser | null> = new BehaviorSubject(undefined)
  currentUser$ = this._currentUser.asObservable()
  isLogged$ = this.currentUser$.pipe(map(user => !!user))
  isAdmin$ = this.currentUser$.pipe(map(u => u?.role === 'admin'))

  constructor(private http: HttpClient, private store: StorageService) {

  }

  login(data: Object): Observable<any> {
    return this.http.post(constants.baseUrl + 'auth/login', data, { withCredentials: true })
      .pipe(tap((u: IUser) => this._currentUser.next(u)))
  }

  register(data: Object): Observable<any> {
    return this.http.post(constants.baseUrl + 'auth/register', data, { withCredentials: true })
      .pipe(tap((u: IUser) => this._currentUser.next(u)))
  }

  logout(data: string): Observable<any> {
    // const { token } = this.store.getItem('auth')
    // const headers = new HttpHeaders({ [constants.authHeaderName]: token })
    return this.http.post(constants.baseUrl + 'auth/logout', data, { withCredentials: true })
      .pipe(tap((u: IUser) => this._currentUser.next(null)))
  }

  authenticate(): Observable<any> {
    // const token = this.store.getItem('auth')?.token
    // const headers = new HttpHeaders({ [constants.authHeaderName]: token })
    return this.http.get(constants.baseUrl + 'auth/user', { withCredentials: true })
      .pipe(
        tap((u: IUser) => this._currentUser.next(u)),
        catchError(() => { this._currentUser.next(null); return [null] })
      )
  }

  deleteUser(): Observable<any> {
    const { _id } = this.store.getItem('auth')
    return this.http.delete(constants.baseUrl + 'users/' + _id, { withCredentials: true })
    .pipe(
        tap((u: IUser) => { this._currentUser.next(null); return [null] }),
          tap(u => this.store.removeItem('auth'))
    )
  }
  

}
