import { ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef } from "@angular/core";
import { CommonListItemDirective } from "../../directives";

@Component({
  selector: `lib-common-list`,
  template: `
    <div class="wrapper-common-list">
      <div *ngFor="let item of data" class="wrapper-common-list__item">
        <ng-template *ngTemplateOutlet="itemTemplate; context: {$implicit: item}"></ng-template>
      </div>
    </div>
  `,
  styleUrls: ["./list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonListComponent<T> {
  @Input() data: T[] = [];

  @ContentChild(CommonListItemDirective, { static: true, read: TemplateRef })
  itemTemplate!: TemplateRef<CommonListItemDirective>;
}
