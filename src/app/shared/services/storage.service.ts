import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class StorageService {
  localStorage = localStorage

  setItem(key: string, data: object): object {
    this.localStorage.setItem(key, JSON.stringify(data));
    return data;
  }

  getItem(key: string) {
    const item = this.localStorage.getItem(key)
    return typeof key === 'string' ? JSON.parse(item) : true
  }

  removeItem(key: string): void {
    this.localStorage.removeItem(key)
  }

  constructor() { }
}