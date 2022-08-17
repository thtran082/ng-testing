import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-content-one",
  template: `
    <div class="border border-gray-400 w-full min-h-[100px] my-4">
      <em>Those values which you passed in will be shown as below</em>
      <hr>
      {{ data | json }}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentOneComponent {
  @Input() data: any;
}
