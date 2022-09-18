import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { fromEvent, Observable, of } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';

@Injectable()
export class UserActivityEffects {
  trackUserActivity$ = createEffect(
    () =>
      fromEvent(document, 'click').pipe(
        concatMap((event) => of('true')),
        tap(console.log)
      ),
    { dispatch: false }
  );
}
