import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson-router',
  template: `
    <ul class="flex flex-row gap-8 mb-4 px-4 pb-4 border-b border-gray-300">
      <li>
        <a
          routerLink="/lesson-router"
          [routerLinkActiveOptions]="{ exact: true }"
          routerLinkActive="font-bold underline"
        >
          Home
        </a>
      </li>
      <li>
        <a
          routerLink="/lesson-router/admin"
          [routerLinkActiveOptions]="{ exact: true }"
          routerLinkActive="font-bold underline"
        >
          Admin
        </a>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
})
export class LessonRouterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
