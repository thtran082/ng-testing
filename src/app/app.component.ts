import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { interval, map, Observable, switchMap, tap } from 'rxjs';
import { routes } from "./app.routing";
import { ApiService } from './services';
import { UserActivityEffects } from './services/user-activities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserActivityEffects],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly routes = routes;

  constructor(
    private router: Router,
    private api: ApiService,
    public userActivitiesService: UserActivityEffects
  ) {}

  isRoot$ = this.router.events.pipe(
    map(() => {
      return this.router.routerState.snapshot.url === '/';
    })
  );

  ngAfterViewInit() {
    // this.userActivitiesService.trackUserActivity$.subscribe();
    // this.api.getUsers().subscribe();
  }
}
