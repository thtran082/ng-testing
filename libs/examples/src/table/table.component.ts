import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ICommonCodeFile, ITableHeaderColumns } from "@common";

@Component({
  selector: `lib-example-table`,
  template: `
    <lib-common-code [files]="files">
      <h1 class="text-xl font-bold">Table Demo</h1>
      <hr>
      <lib-common-table [data]="data" [columns]="columns">
        <ng-template libCommonTableHeader key="email" let-column="column">
          <span class="text-red-600 italic">{{ column.config.title }}</span>
        </ng-template>
        <ng-template libCommonTableBody key="email" let-item>
          <span class="text-red-600 italic">{{ item['email'] }}</span>
        </ng-template>
      </lib-common-table>
    </lib-common-code>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTableComponent {
  files: ICommonCodeFile[] = [
    {
      title: "table.component.ts",
      languages: ["ts"],
      code: `
        something
      `
    }
  ]

  data: { email: string, username: string, isStudent: boolean }[] = [
    { email: "huy@yandex.vn", isStudent: true, username: "huy.tran" },
    { email: "non_coread@yandex.vn", isStudent: true, username: "non_coread" },
    { email: "bdue_ded.221.somehow@gmail.com", isStudent: false, username: "bdue_ded.221.somehow" },
  ];

  columns: ITableHeaderColumns[] = [
    {
      key: "email",
      config: {
        title: "Email Address"
      }
    }, {
      key: "isStudent",
      config: {
        title: "Student"
      }
    }, {
      key: "username",
      config: {
        title: "username"
      }
    },
  ]
}

