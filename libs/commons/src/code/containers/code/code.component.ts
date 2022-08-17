import { Component, Input } from "@angular/core";
import { ICommonCodeFile } from "../../interfaces";

@Component({
  selector: "lib-common-code",
  template: `
    <div class="wrapper-common-code">
      <div class="wrapper-common-code__navigator">
        <div (click)="activeTab = 'Preview'" class="wrapper-common-code__navigator__item" [class.active]="activeTab === 'Preview'">
          Preview
        </div>
        <div *ngFor="let file of files" class="wrapper-common-code__navigator__item">
          {{ file.title }}
        </div>
      </div>
      <div class="wrapper-common-code__container">
        <ng-container *ngIf="activeTab === 'Preview'; else codeTemplate">
          <ng-content></ng-content>
        </ng-container>
      </div>
    </div>

    <ng-template #codeTemplate>

    </ng-template>
  `,
  styleUrls: [`./code.component.scss`]
})
export class CommonsCodeComponent {
  @Input() files: ICommonCodeFile[] = [];

  activeTab: string = 'Preview';
  languages: string[] = [];


}
