import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dynamic-component",
  template: `
    <div class="flex flex-row gap-8 justify-around">
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

  constructor() {
  }

  ngOnInit(): void {
  }

}
