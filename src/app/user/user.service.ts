import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces';
import { StorageService } from '../shared/services/storage.service';
import { tap, map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: BehaviorSubject<IUser | null> = new BehaviorSubject(undefined)
  user$ = this._user.asObservable()
  isAdmin$ = this.user$.pipe(map(u => u?.role === 'admin'))

  constructor(private http: HttpClient, private store: StorageService, private authService: AuthService) { }

  getUser(): Observable<any> {
    const id = this.store.getItem('auth')?._id
    // const headers = new HttpHeaders({ [constants.authHeaderName]: token })
    return this.http.get('users/' + id)
      .pipe(tap((u: IUser) => this._user.next(u)))
  }

  edit(data: object): Observable<any> {
    const id = this.store.getItem('auth')?._id
    return this.http.put('users/' + id, data)
  }

  deleteUser(): Observable<any> {
    return this.authService.deleteUser().pipe(
      tap((u: IUser) => { this._user.next(null); return [null] })
    )
  }

}
