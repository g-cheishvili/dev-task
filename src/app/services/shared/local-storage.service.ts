import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  localStorage: Storage;
  constructor() {
    this.localStorage = localStorage;
  }

  has(key: string): boolean {
    return !!this.localStorage.getItem(key);
  }

  get(key: string): Object | string | null {
    const returnVal = this.localStorage.getItem(key);

    if(returnVal) {
      try {
        return JSON.parse(returnVal);
      } catch (e) {
        return returnVal;
      }
    }
    return null;
  }

  set(key: string, value: any): void {
    let finalVal;
    try {
      finalVal = JSON.stringify(value);
    } catch (e) {
      finalVal = value;
    }

    this.localStorage.setItem(key, finalVal);
  }

  remove(key: string): void {
    this.localStorage.removeItem(key);
  }

  clear(): void {
    this.localStorage.clear();
  }

}
