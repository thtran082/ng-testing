import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private router: Router) {}
  isRoot$ = this.router.events.pipe(
    map(() => {
      return this.router.routerState.snapshot.url === '/';
    }),
  )
}
