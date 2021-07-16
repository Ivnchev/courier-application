import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IAlert {
  message: string,
  type: string,
  time: number
}

@Injectable({
  providedIn: 'root'
})

export class AlertService {

  private _alert: BehaviorSubject<IAlert | null> = new BehaviorSubject(undefined)
  alert$ = this._alert.asObservable()

  constructor() { }

  create({ type, message, time }: { type: string; message: string; time: number; }): any {
    return this._alert.next({ type, message, time })
  }

}
