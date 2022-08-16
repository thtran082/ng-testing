import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({ providedIn: 'any' })
export class AuthService {
  readonly isLoggedIn$ = of(true).pipe(delay(1000));

  readonly allowPermission$ = of(true).pipe(delay(500));
}
