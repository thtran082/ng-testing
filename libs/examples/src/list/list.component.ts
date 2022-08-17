import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ICommonCodeFile } from "@common";

@Component({
  selector: 'lib-example-list',
  template: `
    <h1 class="text-2xl font-bold italic mb-4">Creating dynamic components with Directives</h1>
    <lib-common-code [files]="files">
      <h1 class="text-xl font-bold">List Demo</h1>
      <hr>
      <lib-common-list [data]="data">
        <ng-template libListItem let-item>
          {{item}}
        </ng-template>
      </lib-common-list>
    </lib-common-code>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamplesListComponent {
  readonly data = ['component A', 'component B', 'component C'];

  files: ICommonCodeFile[] = [{
    title: 'Typescript',
    languages: ['ts'],
    code: `
      import { Component } from "@angular/core";
      import { ICommonCodeFile } from "@common";
      @Component({
        selector: 'lib-example-list',
        template: \`\`
      })
      export class ExamplesListComponent {
        files: ICommonCodeFile[] = [{
          title: 'Typescript',
          languages: [''],
          code: \`\`
        }];
      }
    `
  }];
}
