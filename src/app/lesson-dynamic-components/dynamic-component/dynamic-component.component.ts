import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dynamic-component",
  template: `
    <div class="flex flex-row gap-8 justify-around">
      <div class="flex-1">
        <app-dynamic-container></app-dynamic-container>
      </div>
      <div class="flex-1">
        <lib-example-list></lib-example-list>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicComponentComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
