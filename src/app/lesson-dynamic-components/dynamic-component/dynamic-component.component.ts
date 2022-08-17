import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-dynamic-component',
  template: `
    <app-dynamic-container></app-dynamic-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
