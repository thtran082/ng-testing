import { Component, Input } from "@angular/core";
import { ICommonCodeFile } from "../../interfaces";

@Component({
  selector: "lib-common-code",
  template: `
    <div class="wrapper-common-code">
      <div class="wrapper-common-code__navigator">
        <a (click)="activeTab = 'Preview'"
             class="wrapper-common-code__navigator__item"
             [class.active]="activeTab === 'Preview'">
          Preview
        </a>
        <a *ngFor="let file of files"
             (click)="activeTab = file.title"
             class="wrapper-common-code__navigator__item"
             [class.active]="activeTab === file.title">
          {{ file.title }}
        </a>
      </div>
      <div class="wrapper-common-code__container">
        <ng-container *ngIf="activeTab === 'Preview'; else codeTemplate">
          <ng-content></ng-content>
        </ng-container>
      </div>
    </div>

    <ng-template #codeTemplate>
      <pre class="wrapper-common-code__container__pre">
        <code [highlight]="code" [languages]="languages" [lineNumbers]="true"></code>
      </pre>
    </ng-template>
  `,
  styleUrls: [`./code.component.scss`]
})
export class CommonsCodeComponent {
  @Input() files: ICommonCodeFile[] = [];

  public get code() {
    return this.files.find(i => i.title === this.activeTab)!.code;
  }

  activeTab: string = "Preview";
  languages: string[] = ['typescript'];


}
