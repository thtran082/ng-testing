import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, finalize, interval, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  counter$ = new BehaviorSubject<number>(0);
  constructor(private http: HttpClient) {}

  getUsers() {
    return this._getUsersApi();
  }

  private _getUsersApi() {
    return this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        delay(3000),
        finalize(() => console.log('done')),
        tap((r) => {})
        // tap(interval(1000).pipe(tap(console.log))),
      );
  }
}

export class SDK {
  constructor(public loggedInUserId?: string) {}

  createPost(title: string) {
    this.assertFn();
    this.createPost(this.loggedInUserId);
    this.wow = 'ahii';
  }

  assertFn(): asserts this is { loggedInUserId: string; wow: string } {
    if (!this.loggedInUserId) {
      throw new Error('User is not logged in');
    }
  }
}

const testing = (value: string | null) => {
  if (value != null) {
    [].forEach(() => {
      const z = value.toUpperCase();
    });
    // value = null;
  }
};
