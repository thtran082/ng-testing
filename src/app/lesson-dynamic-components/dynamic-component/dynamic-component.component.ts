import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { finalize, interval, tap } from 'rxjs';

@Component({
  selector: 'app-dynamic-component',
  template: `
    <div class="flex flex-row gap-8 justify-around">
      <div>
        {{ vm$ | async }}
      </div>
      <div class="flex-1">
        <app-dynamic-container></app-dynamic-container>
      </div>
      <div class="flex-1 flex flex-col gap-6">
        <lib-example-list></lib-example-list>
        <lib-example-table></lib-example-table>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicComponentComponent implements OnInit {
  readonly vm$ = interval(1000).pipe(tap(console.log));

  constructor() {}

  ngOnInit(): void {}
}
