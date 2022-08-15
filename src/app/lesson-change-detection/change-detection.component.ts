import { DOCUMENT } from '@angular/common';
import { ApplicationRef, Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { shareReplay } from 'rxjs';
import { ApiService } from '../services/api.service';
import { RenderService } from '../services/render.service';

@Component({
  selector: 'app-change-detection',
  template: `
    <!-- <ul *ngFor="let item of vm$ | async">
      <li>{{item['name']}}</li>
    </ul>
    <ul *ngIf="vm$ | async as vm">{{vm.length}}</ul> -->
    <p style="margin-inline: auto" (click)="app.tick()">App component</p>

    <div style="display: flex; justify-content: space-around;">
      <div>
        <app-header [value]="value"></app-header>
      </div>
      <div>
        <app-main></app-main>
      </div>
    </div>

    {{ addRender() }}
  `,
  styles: [
    `
      p {
        margin-bottom: 1rem !important;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None
})
export class ChangeDetectionComponent {
  value = 0;
  readonly vm$ = this.api.getUsers().pipe(shareReplay());

  constructor(
    public renderService: RenderService,
    public app: ApplicationRef,
    public api: ApiService,
    @Inject(DOCUMENT) public document: Document
  ) {}

  addRender() {
    this.renderService.addRender('root');
  }

  ngDoCheck() {
    this.renderService.addDoCheckRender('root');
    console.log(this.constructor.name, ': ngDoCheck');
  }

  ngAfterViewInit() {
    // console.clear();
    var count = 0;
    const a = setInterval(() => {
      if (count === this.renderService.renders.length - 1) clearInterval(a);
      const mapped = (this.renderService.renders[count] as string)
        .replace('Component', '')
        .toUpperCase();
      this.document
        .querySelector(`app-${mapped}>p`)
        ?.classList.add('highlight');
      const newHtml =
        '<span style="color: red!important">(' + count + ')</span>';
      this.document.querySelector(`app-${mapped}>p`) as HTMLElement;
      count++;
    }, 1000);
  }
}
