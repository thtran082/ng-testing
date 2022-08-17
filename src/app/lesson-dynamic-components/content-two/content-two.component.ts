import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-content-two",
  template: `
    <div class="border border-gray-400 w-full min-h-[100px] my-4">
      <em class="text-pink-600">content 2</em>
      <hr>
      {{ data | json }}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentTwoComponent {
  @Input() data: any;
}
